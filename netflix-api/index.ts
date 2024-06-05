
import express from 'express';
import mainRoutes from './routes/mainRoutes';
import pool from './db-config/db';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookie from 'cookie-parser';
import statsController from './controllers/statsController';

const app = express();

app.use(cors());
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
    
