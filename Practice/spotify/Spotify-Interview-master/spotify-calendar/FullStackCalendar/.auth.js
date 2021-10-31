module.exports = {
  firebase: {
    type: "service_account",
    project_id: "spotify-events-af226",
    private_key_id: process.env.Private_Key_Id,
    private_key: process.env.Private_Key_Id
      ? process.env.Private_Key.replace(/\\n/g, "\n")
      : "",
    client_email:
      "firebase-adminsdk-ortqg@spotify-events-af226.iam.gserviceaccount.com",
    client_id: "109420048189288455737",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://accounts.google.com/o/oauth2/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ortqg%40spotify-events-af226.iam.gserviceaccount.com",
  },
};
