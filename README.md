We have deployed our project on railway. You can check that on following link: 
https://railway.app/project/78019e10-62a5-4093-b876-151cfa5ca005/service/1b1db752-c9b4-4507-8365-f525cd839375?id=712e9297-656d-4e0a-adfe-aefa09563fa2

The JSON file code is as follows:
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
