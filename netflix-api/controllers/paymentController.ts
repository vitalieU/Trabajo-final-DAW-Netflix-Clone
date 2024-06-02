import Stripe from 'stripe';
import type { Request, Response } from 'express';

export default{
    createSubscription: async (req: Request, res: Response) => {
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
        const { customer, payment_method, priceId } = req.body; // priceId es el ID del plan de precios
        try {
            // Adjuntar el método de pago al cliente
            await stripe.paymentMethods.attach(payment_method, {
                customer: customer,
            });

            // Cambiar el método de pago predeterminado del cliente
            await stripe.customers.update(customer, {
                invoice_settings: {
                    default_payment_method: payment_method,
                },
            });

            // Crear la suscripción
            const subscription = await stripe.subscriptions.create({
                customer: customer,
                items: [{ price: priceId }],
                expand: ['latest_invoice.payment_intent'],
            });

            res.status(200).json(subscription);
        } catch (error:any) {
            res.status(400).json({ message: error.message });
        }
    }
}