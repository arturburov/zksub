import express from "express";
import cors from "cors";
import {
  ZkConnect,
  ZkConnectServerConfig,
  AuthType,
} from "@sismo-core/zk-connect-server";

const emailMemoryStore = new Map();

const zkConnectConfig: ZkConnectServerConfig = {
  appId: "0x112a692a2005259c25f6094161007967",
};

const zkConnect = ZkConnect(zkConnectConfig);

const claimRequest = {
  groupId: "0x42c768bb8ae79e4c5c05d3b51a4ec74a",
};
const authRequest = {
  authType: AuthType.ANON,
};

const app = express();
app.use(cors());
app.use(express.json());

app.post("/subscribe", async (req, res) => {
  const { email, zkConnectResponse } = req.body;
  try {
    const { verifiedAuths } = await zkConnect.verify(zkConnectResponse, {
      authRequest,
      claimRequest,
    });
    const userId =  verifiedAuths[0].userId;

    // if email is not provided, check if the user is already subscribed
    if (!email) {
      if (emailMemoryStore.has(userId)) {
        const existingEmail = emailMemoryStore.get(userId);
        res.status(200).send({
          email: existingEmail,
          userId,
          status: "already-subscribed",
        });
        return;
      }
      res.status(200).send({ status: "not-subscribed", userId });
    } else {
      emailMemoryStore.set(userId, email);
      res.status(200).send({ email, status: "success", userId });
    }
  } catch (e: any) {
    res.status(400).send({ status: "error", message: e.message });
  }
});

app.post("/reset", async (req, res) => {
  emailMemoryStore.clear();
  res.status(200).send({ status: "success" });
});

app.listen(process.env.PORT ?? 8080);
