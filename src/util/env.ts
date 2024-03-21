import dotenv from 'dotenv';

dotenv.config();

const env = {
  /* Http Interface Config */
  httpPort: parseInt(process.env.HTTP_PORT || '', 10),
  httpBodyLimit: process.env.HTTP_BODY_LIMIT,

  /* AMQP Helper Config */
  amqpProtocol: process.env.AMQP_PROTOCOL,
  amqpHostname: process.env.AMQP_HOSTNAME,
  amqpPort: parseInt(process.env.AMQP_PORT || '5672', 10),
  amqpUsername: process.env.AMQP_USERNAME,
  amqpPassword: process.env.AMQP_PASSWORD,

  /* Application Config */
  httpActive: process.env.HTTP_ACTIVE === 'true',
  amqpActive: process.env.AMQP_ACTIVE === 'true',

  /* Redis integration */
  redisUrl: process.env.REDIS_HOST || '',

  /* Mongo Adapter Config */
  mongoUri: process.env.MONGO_URI || '',
};

export { env };