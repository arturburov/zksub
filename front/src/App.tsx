import "./App.css";
import { useEffect, useState } from "react";
import env from "./environment";
import axios from "axios";
import Theme from "./theme";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import EmailForm from "./components/EmailForm";
import NavBar from "./components/NavBar";
import Loader from "./components/Loader";
import { Gem } from "./components/SismoReactIcon";
import {
  DataRequest,
  ZkConnect,
  ZkConnectClientConfig,
  ZkConnectResponse,
} from "@sismo-core/zk-connect-client";

const zkConnectConfig: ZkConnectClientConfig = {
  appId: "0x112a692a2005259c25f6094161007967"
};
const zkConnect = ZkConnect(zkConnectConfig);

const THE_MERGE_CONTRIBUTOR = DataRequest({
  groupId: "0x42c768bb8ae79e4c5c05d3b51a4ec74a",
});

function App() {
  const [verifying, setVerifying] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<
    "already-subscribed" | "not-subscribed" | null
  >(null);

  const [zkConnectResponse, setZkConnectResponse] =
    useState<ZkConnectResponse | null>(null);

  function onZkConnectButtonClick() {
    zkConnect.request({
      dataRequest: THE_MERGE_CONTRIBUTOR,
    });
  }

  async function onSubmitEmail(email: string) {
    return await axios.post(`${env.zkMailingApiUrl}/subscribe`, {
      email,
      zkConnectResponse,
    });
  }

  useEffect(() => {
    const zkConnectResponse = zkConnect.getResponse();
    if (zkConnectResponse) {
      setZkConnectResponse(zkConnectResponse);
      setVerifying(true);
      axios
        .post(`${env.zkMailingApiUrl}/subscribe`, { zkConnectResponse })
        .then(res => {
          setVerifying(false);
          setSubscriptionStatus(res.data.status);
        })
        .catch(err => {
          console.log(err.response.data.status);
          setVerifying(false);
        });
    }
  }, []);

  return (
    <Theme>
      <div className="container">
        <NavBar />

        {!subscriptionStatus && (
          <Landing>
            <button
              className="zk-connect-button"
              onClick={onZkConnectButtonClick}
              disabled={verifying}
            >
              {verifying ? (
                <>
                  <Loader size={16} color={"#ffffff"} />
                  <span>verifying...</span>
                </>
              ) : (
                <>
                  <Gem className="zk-gem"/>
                  <span>zkConnect</span>
                </>
              )}
            </button>
          </Landing>
        )}

        {subscriptionStatus && (
          <EmailForm
            onSubmitEmail={onSubmitEmail}
            subscriptionStatus={subscriptionStatus}
          />
        )}
        <Footer />
      </div>
    </Theme>
  );
}

export default App;
