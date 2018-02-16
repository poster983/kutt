module.exports = {
  PORT: 80,

  /* The domain that this website is on */
  DEFAULT_DOMAIN: process.env.DEFAULT_DOMAIN,

  /* Neo4j database credential details */
  DB_URI: process.env.NEO4J_URL,
  DB_USERNAME: '',
  DB_PASSWORD: '',

  /* A passphrase to encrypt JWT. Use a long and secure key. */
  JWT_SECRET: process.env.JWT_SECRET,

  /*
    Invisible reCaptcha secret key
    Create one in https://www.google.com/recaptcha/intro/
  */
  RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,

  /*
    Your email host details to use to send verification emails.
    More info on http://nodemailer.com/
  */
  MAIL_HOST: process.env.MAIL_HOST,
  MAIL_PORT: typeof process.env.MAIL_PORT === "number"? process.env.MAIL_PORT:587,
  MAIL_SECURE: typeof process.env.MAIL_SECURE === "boolean"? process.env.MAIL_SECURE:false,
  MAIL_USER: process.env.MAIL_USER,
  MAIL_PASSWORD: process.env.MAIL_PASSWORD
};
