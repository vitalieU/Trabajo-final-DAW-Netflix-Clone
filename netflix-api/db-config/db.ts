//postgres database configuration

import { Pool } from 'pg';

const pool = new Pool({
  user: Bun.env.DB_USER,
  password: Bun.env.DB_PASSWORD,
  host: Bun.env.DB_HOST,
  database: Bun.env.DB_DATABASE,
  port: 5432
});


export default pool;
