import Stripe from "stripe";
import pool from "../db-config/db";
import type { Request, Response } from "express";
import * as jwt from 'jsonwebtoken'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
export default {
  createSubscription: async (req: Request, res: Response) => {
    const { email, item } = req.body;
    if(!email || !item){
      res.status(400).json({message:"email and item are required"});
    }
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [
        {
          price: item === '1' ? Bun.env.STRIPE_PRICE_ID_1 : item === '2' ? Bun.env.STRIPE_PRICE_ID_2 : item === '3' ? Bun.env.STRIPE_PRICE_ID_3 : '',
          quantity: 1,
        },
      ],
      success_url: `${Bun.env.ENDPOINT}/api/payment/success?session_id={CHECKOUT_SESSION_ID}&email=${email}`,
      cancel_url: `${Bun.env.ENDPOINT}/api/payment/cancel?session_id={CHECKOUT_SESSION_ID}&email=${email}`,
    });
    if(session){
      res.status(200).json( session.url );
    }
    else{
      res.status(500).json({message:"error"});
    }
  },

  successTtransaction: async (req: Request, res: Response) => {
    const client = await pool.connect();
    const session = await stripe.checkout.sessions.retrieve(req.query.session_id as string);
    const query = `INSERT INTO subscriptions (email, stripe_id, stripe_status, user_id, amount, transaction_date) VALUES ($1, $2, $3, $4, $5, $6)`;
    const query2 = `SELECT * FROM users WHERE email = $1`;
    const query3 = `UPDATE users SET suscribed = true WHERE email = $1`;

    try {
      await client.query("BEGIN");
      const resp1 = await client.query(query2, [req.query.email]);
      await client.query(query, [req.query.email, session.id, session.payment_status, resp1.rows[0].id, session.amount_total,  new Date()]);
      await client.query(query3, [req.query.email]);
      await client.query("COMMIT");
      res.status(200).json({ message: "success" });

    } catch (error) {
      await client.query("ROLLBACK");
    } finally {
      client.release();
    }
  },
  canceledTRansaction: async (req: Request, res: Response) => {
    const client = await pool.connect();
    const session = await stripe.checkout.sessions.retrieve(req.query.session_id as string);
    const query = `INSERT INTO subscriptions (email, stripe_id,  stripe_status, user_id,amount, transaction_date) VALUES ($1, $2, $3, $4, $5, $6)`;
    const  query2 = `SELECT * FROM users WHERE email = $1`;
    try {
      
      await client.query("BEGIN");
      const resp1 =await client.query(query2, [req.query.email]);
      await client.query(query, [req.query.email, session.id, session.payment_status, resp1.rows[0].id, session.amount_total, new Date()]);
      await client.query("COMMIT");
      res.status(200).json({ message: "canceled" });
    } catch (error) {
      await client.query("ROLLBACK");
      res.status(500).json({ message: "error" });
    }
    finally{
      client.release();
    }
    
  },
  checkIfSuscribtionIsCompleted: async (req: Request, res: Response) => {      
    const query = `SELECT * FROM subscriptions WHERE email = $1 AND stripe_status = 'paid'`;
    const userQuery = `SELECT * FROM users WHERE email = $1`;
    let user;
    try {
      const response = await pool.query(query, [req.query.email]);
      if(response.rows.length > 0){
        user = await pool.query(userQuery, [req.query.email]);
        const token = jwt.sign({ id: user.rows[0].id, email:user.rows[0].email, suscribed:true }, Bun.env.JWT_SECRET!, { expiresIn: '24h' });
         delete user.rows[0].password;
        res.status(200).json({email: user.rows[0].email, suscribed:true});
      }
      else{
        res.status(404).json({suscribed:false});
      }
    } catch (error) {
      res.status(500).json({message:"error"});
    }

  }

};
