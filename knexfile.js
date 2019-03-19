module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'MVP_Jokes',
    },
  },

  staging: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'MVP_Jokes',
    },
    pool: {
      min: 0,
      max: 10,
    },
  },

  production: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'MVP_Jokes',
    },
    pool: {
      min: 0,
      max: 10,
    },
  },
};
