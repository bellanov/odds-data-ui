#!/bin/bash
#
# Preview the Application.

TIMESTAMP=$(date +%Y%m%d%H%M%S)

# Deploy to Firebase Hosting Channel
firebase hosting:channel:deploy odds-data-ui-bellanov-$TIMESTAMP