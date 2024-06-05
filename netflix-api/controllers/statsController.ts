import pool from "../db-config/db";

import WebSocket from "ws";

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws: WebSocket) => {
  console.log("New client connected");


  ws.on("message", async (message: string) => {
    const stats = await getSubsStats();
    const users = await getCountUsers();
    const media = await getCountTvShowsMovies();
    const earnings = await getEarnings();  
    ws.send(JSON.stringify({stats, users, media, earnings}));
  
    setInterval(async () => {

      ws.send(JSON.stringify({stats, users, media, earnings}));
    }, 5000);
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

async function getSubsStats() {
  const query = `WITH months AS (
      SELECT DATE_TRUNC('month', generate_series(DATE_TRUNC('year', CURRENT_DATE), CURRENT_DATE, '1 month'::interval)) AS month
    ),
    subscribed_users AS (
      SELECT DATE_TRUNC('month', created_at) AS month, COUNT(*) AS user_count
      FROM users
      WHERE suscribed = true
      GROUP BY month
    )
    SELECT months.month, COALESCE(subscribed_users.user_count, 0) AS user_count
    FROM months
    LEFT JOIN subscribed_users ON months.month = subscribed_users.month
    ORDER BY months.month;`;
  let result;
  try {
    const resp = await pool.query(query);
    result = resp.rows;
  } catch (error) {
    return [];
  }

  return result;
}

async function getCountUsers() {
  const query = `SELECT COUNT(*) FROM users`;
  let result;
  try {
    const resp = await pool.query(query);
    result = resp.rows[0];
    return result;
  } catch (error) {
    return 0;
  }
}

async function getCountTvShowsMovies() {
  const query = `SELECT 
                 SUM(CASE WHEN media_type = 'movie' THEN 1 ELSE 0 END) AS movie_count,
                 SUM(CASE WHEN media_type = 'tv' THEN 1 ELSE 0 END) AS tv_show_count
                 FROM movies;`;
  
  let result;
  try {
    const resp = await pool.query(query);
    result = resp.rows[0];
    return result;
  } catch (error) {
    return {movie_count: 0, tv_show_count: 0};
  }
}

async function getEarnings(){
  const query = 'select email , amount, stripe_status FROM subscriptions ORDER BY transaction_date'
  let result;
  try {
    const resp = await pool.query(query);
    result = resp.rows;
    return result;
  } catch (error) {
    return [];
  }
}

export default {};
