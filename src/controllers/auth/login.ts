import { Request, Response } from 'express';
import jwt, { SignOptions } from 'jsonwebtoken';
import User from '@models/User';
import Passwords from '@models/Password';
import { JWT_EXPIRES_IN, JWT_SECRET } from '@config';
import { comparePasswords } from '@utils/encryption';

const secretKey = JWT_SECRET;

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    // Validate request
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    const user = await User.findOne({ where: { username } });

    // Check if user exists
    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    const userPassword = await Passwords.findOne({ where: { userId: user.id, active: true } });

    if (!userPassword) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Validate password
    const isPasswordValid = await comparePasswords(password, userPassword.hashedPassword);
    if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Generate JWT
    const token = jwt.sign({ username }, secretKey, { expiresIn: JWT_EXPIRES_IN as SignOptions['expiresIn'] });

    // Return token
    return res.status(200).json({ token });
};