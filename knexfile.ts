// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 * yarn add mysql2 knex
 * npx knex migrate:make create_projects_table
 */
export default {
  development: {
    client: 'mysql2', //yarn add mysql2
    connection: {
      host: 'localhost',
      port: 3306,
      user: 'user',
      password: 'password',
      database: 'db',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`,
    },
  },
};
