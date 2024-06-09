import type{ Request, Response } from 'express';
import pool from '../db-config/db';
import type {User} from '../model/typing';
import * as jwt from 'jsonwebtoken'
import { resolveSync } from 'bun';


export default{
    registration: async (req: Request, res: Response) => {
        const { email, pass} = req.body;
        try {
            const hashedPassword =  Bun.password.hashSync(pass);
            const uuid= crypto.randomUUID();
            const response = await pool.query('INSERT INTO users (id, email, password) VALUES ($1, $2, $3) RETURNING *', [uuid, email, hashedPassword]);
            if(response.rows.length){
                res.status(201).json(true);
            }
        } catch (error:any) {
            res.status(400).json({ message: error.message });
        }
    },
    login: async (req: Request, res: Response) => {
        const { email, password } = req.body;
        try {
            const response = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
            if (!response.rows.length) {
                return res.status(404).send('User not found');
            }
            const user = response.rows[0];
            const isPasswordValid = await Bun.password.verify(password, user.password);
            
            if (!isPasswordValid) {
                return res.status(401).send('Invalid password');
            }
            const token = jwt.sign({ id: user.id, email:user.email, suscribed:user.suscribed }, Bun.env.JWT_SECRET!, { expiresIn: '24h' });
            res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'none'});
            res.status(200).json({ emai: user.email, suscribed: user.suscribed});

        } catch (error:any) {
            res.status(400).json({ message: error.message });
        }
    },
    checkUser: async (req: Request, res: Response) => {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).send('Unauthorized');
        }
        try {
            const decoded  = jwt.verify(token, Bun.env.JWT_SECRET!) as { id: string , email: string, suscribed: boolean} ;
            const response = await pool.query('SELECT * FROM users WHERE id = $1', [decoded.id]);
            if (!response.rows.length) {
                return res.status(404).send('User not found');
            }
            
            res.status(200).json({email: response.rows[0].email, suscribed: response.rows[0].suscribed});
        } catch (error:any) {
            res.status(401).json({ message: error.message });
        }
    },
    addMovieToWatchlist: async (req: Request, res: Response) => {
        const client = await pool.connect();
        const { movie_id } = req.body;
        const query = 'INSERT INTO watchlis (user_id, movie_id) VALUES ($1, $2) RETURNING *';
        try {
            await client.query('BEGIN');
            const response = await client.query(query, [req.body.user.id, movie_id]);
            if(response.rows.length){
                res.status(201).json(true);
            }
            await client.query('COMMIT');

        } catch (error:any) {
            await client.query('ROLLBACK');
            res.status(400).json({ message: error.message });
        }
        finally {
            client.release();
        }
    },
    removeMovieFromWatchlist: async (req: Request, res: Response) => {
        const client = await pool.connect();
        const { movie_id } = req.body;
        const query = 'DELETE FROM watchlis WHERE user_id = $1 AND movie_id = $2';
        try {
            await client.query('BEGIN');
            const response = await pool.query(query, [req.body.user.id, movie_id]);
            if(response.rowCount){
                res.status(200).json(true);
            }
            await client.query('COMMIT');
        } catch (error:any) {
            await client.query('ROLLBACK');
            res.status(400).json({ message: error.message });
        }
        finally {
            client.release();
        }
    },
    getWatchlist: async (req: Request, res: Response) => {
        const query = `SELECT movies.ID FROM movies
                      JOIN watchlis w ON w.movie_id = movies.id
                      WHERE w.user_id = $1;`
        try {
            const response = await pool.query(query,[req.body.user.id]);
           res.status(200).json(response.rows);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }              
    }

}