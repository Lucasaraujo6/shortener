/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 *  npx knex seed:make 001_urls //cria seed vazia
 *  npx knex seed:run  //executa as seeds
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('urls').del();
  await knex('urls').insert([
    {
      url: 'https://copeve.cefetmg.br/processos/2023_TEC/arquivos/publicacoes/manual-do-coordenador-de-salas',
      shorter: 'manual',
    },
    {
      url: 'https://copeve.cefetmg.br/processos/2020_TEC/videos/Aplicador',
      shorter: 'aplicador',
    },
    { url: 'https://outlook.live.com/mail/0/', shorter: 'email' },
  ]);
};
