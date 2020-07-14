// Update with your config settings.

module.exports = {
  // configuration for a development database
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/veggies.db3', // change the path
    },
    useNullAsDefault: true, // used only for SQLite
    migrations: {
      directory: './data/migrations',
    },
  },

  // testing db
  // testing: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './data/testing.db3',
  //   },
  //   useNullAsDefault: true, // used only for SQLite
  // },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
  // configuration for a producting database
  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
}
