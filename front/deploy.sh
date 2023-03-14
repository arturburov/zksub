#!/usr/bin/env bash

git init
heroku git:remote -a $APP_NAME

if [ -z "$BACK_APP_NAME" ]; then
  echo "BACK_APP_NAME is not set"
  exit 1
fi 

# setup envs vars for the frontend
cat <<EOF > public/envs/env.js
window.env = { 
  name: "${ENV:-PROD}", 
  zkMailingApiUrl: "https://$BACK_APP_NAME.herokuapp.com",
  vaultBaseUrl: "${VAULT_BASE_URL:-https://vault-beta.sismo.io}"
};
EOF

git add .
git commit -am "publish front"
git push heroku main --force
rm -rf .git

git checkout public/envs/env.js