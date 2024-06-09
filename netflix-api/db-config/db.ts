//postgres database configuration

import { Pool } from 'pg';

const pool = new Pool({
  user: Bun.env.DB_USER,
  password: Bun.env.DB_PASSWORD,
  host: Bun.env.DB_HOST,
  database: Bun.env.DB_DATABASE,
  port: 5432
});

console.log('DB_USER', Bun.env.DB_USER, 'DB_PASSWORD', Bun.env.DB_PASSWORD, 'DB_HOST', Bun.env.DB_HOST, 'DB_DATABASE', Bun.env.DB_DATABASE);


export default pool;
