
const http = require('http');
const app = require('./app');
const Db = require('./app/db');
const Redis = require('./app/redis');
const Logger = require('./app/helpers/logger');
const config = require('./app/helpers/config_helper').Config;

app.config = config;

Redis.connect()
  .then(() => {
    Logger.info('Connected to redis');
    Db.connect(config.db_url)
      .then(() => {
        Logger.info('Connected to mongodb');
        http.createServer(app).listen(config.port, (err) => {
          if (err)
            Logger.error(err);
          else
            Logger.info(`Server is up on port ${config.port}`);
        });
      })
      .catch(mongoErr => {
        Logger.error('Error connecting to mongo');
        Logger.error(mongoErr);
      });
  })
  .catch(redisErr => {
    Logger.error('Error connecting to redis');
    Logger.error(redisErr);
  });