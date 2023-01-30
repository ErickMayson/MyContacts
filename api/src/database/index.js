// eslint-disable-next-line import/no-extraneous-dependencies
const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 3900,
  user: 'root',
  password: 'root',
  database: 'mycontacts',
});

client.connect();

// node src/database/index.js

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
