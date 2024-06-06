import type{ Request, Response } from 'express';
import pool from '../db-config/db';
import fs from 'fs';
export default {
    getMovies: async (req: Request, res: Response) => {
        const {genre, popularity, rating, netflix, media_type} = req.query;
        try {
            let where_clause = '';
            let order_clause = '';
    
            if(genre){
                where_clause += ` WHERE (SELECT CAST(id AS TEXT) FROM genres WHERE name = '${genre}') = any (SELECT jsonb_array_elements_text(genre_ids::jsonb))`;
            }
            if(popularity){
                order_clause += `ORDER BY  popularity DESC, release_date DESC`;
            }
            if(rating){
                order_clause += `, vote_average DESC, vote_count DESC `;
            }
           
            if(netflix){
                where_clause +=  ' ';
            }
            if (media_type && media_type !== 'all') {
                if (where_clause) {
                    where_clause += ' AND ';
                } else {
                    where_clause += ' WHERE ';
                }
                where_clause += `media_type = '${media_type}'`;
            }
    
            let query = `SELECT * FROM movies ${where_clause} ${order_clause} LIMIT 10`;
            const response = await pool.query(query);
            res.status(200).json(response.rows);
        } catch (error:any) {
            res.status(400).json({ message: error.message });
        }
    },
    streamVideo: async (req: Request, res: Response) => {
        const { id } = req.query; 
        try {
            const response = await pool.query('SELECT * FROM videos WHERE id = $1', [id]);
            

            if (!response.rows.length) {
                return res.status(404).send('Video not found');
            }
            //curent working directory + video path
            const videoPath = process.cwd() + '/videos/'+response.rows[0].video_path;

            if (!fs.existsSync(videoPath)) {
                return res.status(404).send('Video file not found');
            }
    
            res.setHeader('Content-Type', 'video/mp4');
            res.setHeader('Accept-Ranges', 'bytes');
    
 
           const videoStream = fs.createReadStream(videoPath);
            videoStream.pipe(res);
    

        } catch (error:any) {
            res.status(400).json({ message: error.message });
        }
    },
    getVideo : async (req: Request, res: Response) => {
        const { id } = req.query;
        try {
            const response = await pool.query('SELECT * FROM videos WHERE id = $1', [id]);
            res.status(200).json({path: response.rows[0].video_path});
        } catch (error:any) {
            res.status(400).json({ message: error.message });
        }
    },
    getGenre: async (req: Request, res: Response) => {
        const { genre } = req.query;
        try {
            const response = await pool.query('SELECT * FROM genres WHERE id = $1', [genre]);
            res.status(200).json(response.rows);
        } catch (error:any) {
            res.status(400).json({ message: error.message });
        }
    }
}