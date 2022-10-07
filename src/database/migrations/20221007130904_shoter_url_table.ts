/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 * 
 * npx knex migrate:up 20221006225128_create_projects_table.js
 * 
 * npx knex migrate:list
 * npx knex migrate:up nome_da_migration.js
 * npx knex migrate:latest
 * 
 */
exports.up = (knex) =>
  knex.schema.createTable('urls', (table) => {
    table.text('url');
    table.text('shorter', 7);

    table.timestamps(true, true);
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('urls');
