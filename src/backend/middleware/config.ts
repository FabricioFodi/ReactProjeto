import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const VITE_SECRET_KEY = process.env.VITE_SECRET_KEY as string;

export async function AutenticarToken() {
    try {
    return (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers['authorization'];
        if (!token) return res.status(401).send({ auth: false, message: 'Token não informado.' });

        jwt.verify(token, VITE_SECRET_KEY, (err, decoded) => {
            if (err) return res.status(500).send({ auth: false, message: 'Falha ao autenticar o token.' });
            next();
        });
    }
} catch (error) {}
}