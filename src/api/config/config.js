export default {
  db: {
    str: process.env.NODE_ENV === 'development' ? process.env.MONGO_URI : process.env.MONGO_URI
  },
  authorizerUrl: process.env.AUTHORIZER_URL,
  jwtSecretKey: process.env.JWT_SECRET_KEY,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN,
  authorizerUrl: process.env.AUTHORIZER_URL,
  sendEmailFrom: process.env.SEND_EMAIL_FROM
}
