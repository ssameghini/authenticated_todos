import { Request, Response } from 'express';
import User from '#models/User';
import Passwords from '#models/Password';
import { comparePasswords } from '#utils/encryption';
import { jwtSign } from '#src/utils/jwt';

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
    const accessToken = jwtSign({ sub: user.id, username: user.username });

    // Return token
    return res.status(200).json({ accessToken });
};