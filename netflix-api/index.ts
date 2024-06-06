
import express from 'express';
import mainRoutes from './routes/mainRoutes';
import pool from './db-config/db';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookie from 'cookie-parser';
import statsController from './controllers/statsController';

const app = express();
app.use((req, res, next) => {
  const allowedOrigins = ['http://172.26.7.149:5175'];
  const origin = req.headers.origin ?? '';

  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  // Allow other headers to be sent in the request
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  // Allow the OPTIONS method (preflight request) to check for CORS permissions
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

  // Indicate that the response can include credentials (e.g., cookies)
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Move to the next middleware
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookie());

mainRoutes(app);

app.listen(3003, () => {
  console.log('Server is running on port 3003');
});

pool.connect()
    .then(() => console.log('connected to the db'))
    .catch((err) => console.error('error connecting to the db', err));

// Start the WebSocket server

statsController;
    
