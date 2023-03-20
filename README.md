<br />
<div align="center">
  <img src="https://static.sismo.io/readme/top-main.png" alt="Logo" width="150" height="150" style="borderRadius: 20px">

  <h3 align="center">
    zkSub
  </h3>

  <p align="center">
    Made by <a href="https://www.docs.sismo.io/" target="_blank">Sismo</a>
  </p>
  
  <p align="center">
    <a href="https://discord.gg/uAPtsfNrve" target="_blank">
        <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white"/>
    </a>
    <a href="https://twitter.com/sismo_eth" target="_blank">
        <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"/>
    </a>
  </p>
  <a href="https://www.sismo.io/" target="_blank"></a>
</div>

The zkSub app allows to register users to a mailing list once they have privately authenticate themselves with [zkConnect](https://github.com/sismo-core/zk-connect-packages) single sign-on. 

The repository includes the frontend (React) and the backend (NodeJS) part:
- In the [frontend](./front/src/App.tsx) we use the [zk-connect-client](https://github.com/sismo-core/zk-connect-packages) package to redirect the user to Sismo Vault App to generate a zero-knowledge proof. Once the proof is generated, the user is redirected back to zkSub and the proof is sent to the backend. 
- In the [backend](./back/src/index.ts), we use the [zk-connect-server](https://github.com/sismo-core/zk-connect-packages) package to verify that the proof is valid. If that's the case, the user is registered to the mailing list.

You can see the deployed demo app at [https://demo.zksub.io/](https://demo.zksub.io/).

Here is a guide to integrate ZK Connect in your own application: [https://zk-connect-guide.sismo.io/](https://zk-connect-guide.sismo.io/).

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (v18.15.0, latest LTS version)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

### Front-end
In a first terminal:
```sh
# Go to frontend folder
cd front

# Install dependencies
yarn 

# Start front
yarn start
```

### Back-end

In distinct terminal: 

```sh
# Go to backend folder
cd back

# Install dependencies
yarn 

# Start server
yarn start
```

## Deploy on Heroku

This demo has been deployed using heroku at [https://demo.zksub.io/](https://demo.zksub.io/).

Here is how you can easily deploy yours: 
1) Create an account on [Heroku](https://signup.heroku.com/) 

2) Install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli)

3) Login to your Heroku account from the CLI
```bash
heroku login
```

4) Deploy your application 
```bash
# At the root of the project run
APP_NAME=zksub-test ./deploy.sh
```

Your application should be deployed on https://zksub-test-front.herokuapp.com

<br/>
<img src="https://static.sismo.io/readme/bottom-main.png" alt="bottom" width="100%" >