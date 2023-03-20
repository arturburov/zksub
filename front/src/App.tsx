import "./App.css";
import { useState } from "react";
import env from "./environment";
import axios from "axios";
import Theme from "./theme";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import EmailForm from "./components/EmailForm";
import NavBar from "./components/NavBar";
import {
  ZkConnectButton,
  ZkConnectClientConfig,
  ZkConnectResponse
} from "@sismo-core/zk-connect-react";

const config: ZkConnectClientConfig = {
  appId: "0x112a692a2005259c25f6094161007967",
  devMode: {
		enabled: env.name === "LOCAL", 
		devAddresses: [ 
      // Add your dev addresses here to become eligible in the DEV env
		  "0xb01ee322C4f028B8A6BFcD2a5d48107dc5bC99EC" 
		],
	}
}

function App() {
  const [verifying, setVerifying] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<
    "already-subscribed" | "not-subscribed" | null
  >(null);

  const [zkConnectResponse, setZkConnectResponse] =
    useState<ZkConnectResponse | null>(null);

  async function onSubmitEmail(email: string) {
    return await axios.post(`${env.zkMailingApiUrl}/subscribe`, {
      email,
      zkConnectResponse,
    });
  }

  console.log("env.name", env.name);

  return (
    <Theme>
      <div className="container">
        <NavBar />
        
        {!subscriptionStatus && (
          <Landing>
            <ZkConnectButton 
              config={config}
              dataRequest={{
                //The merge contributor groupId
                groupId: "0x42c768bb8ae79e4c5c05d3b51a4ec74a"
              }}
              onResponse={(response) => {
                setZkConnectResponse(response);
                setVerifying(true);
                axios
                  .post(`${env.zkMailingApiUrl}/subscribe`, { zkConnectResponse: response })
                  .then(res => {
                    setVerifying(false);
                    setSubscriptionStatus(res.data.status);
                  })
                  .catch(err => {
                    console.log(err.response.data.status);
                    setVerifying(false);
                  });
              }}
              verifying={verifying}
            />
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
