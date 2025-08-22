
#!/bin/bash
#
# Switch Hosting Environments.

# User Input
ENVIRONMENT=$1

# Environment Configurations
QA="odds-data-ui-1748801558-qa"
DEV="odds-data-ui-1748801558-dev"
PROD="odds-data-ui-1748801558"

# Determine Environment
if [ "$ENVIRONMENT" == "qa" ]; then
  SITE_NAME=$QA
elif [ "$ENVIRONMENT" == "prod" ]; then
  SITE_NAME=$PROD
elif [ "$ENVIRONMENT" == "dev" ]; then
  SITE_NAME=$DEV
else
  echo "Invalid environment specified."
  exit 1
fi

# Update Firebase Hosting Site
jq --arg SITE_NAME "$SITE_NAME" '.hosting.site = $SITE_NAME' firebase.json > tmp.json && mv tmp.json firebase.json
