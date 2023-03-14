#!/usr/bin/env bash

FRONT_APP_NAME=${APP_NAME}-front
BACK_APP_NAME=${APP_NAME}-back

heroku create $FRONT_APP_NAME --remote $FRONT_APP_NAME
heroku create $BACK_APP_NAME --remote $BACK_APP_NAME

cd front
APP_NAME=$FRONT_APP_NAME BACK_APP_NAME=$BACK_APP_NAME ./deploy.sh

cd ../back
APP_NAME=$BACK_APP_NAME ./deploy.sh

echo "App deployed on https://$FRONT_APP_NAME.herokuapp.com"