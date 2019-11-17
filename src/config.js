export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_BQSmlMpfov2U62KDyLIJQtn600Cn4PzEA9",
    s3: {
      REGION: "eu-west-1",
      BUCKET: "notes-app-uploads-sg"
    },
    apiGateway: {
      REGION: "eu-west-1",
      URL: "https://o5dw5gvihh.execute-api.eu-west-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "eu-west-1",
      USER_POOL_ID: "eu-west-1_sGUxNK8VA",
      APP_CLIENT_ID: "1vl1hpj8a9ibpfrf9ka9m9qogj",
      IDENTITY_POOL_ID: "eu-west-1:1a749f12-dda0-406a-afa9-a36d80e716d4"
    }
  };