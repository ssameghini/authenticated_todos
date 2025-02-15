import { Request, Response } from 'express';
import User from '@models/User';
import Passwords from '@models/Password';
import { PASSWORD_EXPIRATION_DAYS } from '@config';
import { encryptPassword } from '@utils/encryption';

const registerUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already taken' });
        }

        // Hash the password
        const hashedPassword = await encryptPassword(password);

        // Create a new user
        const newUser = await User.create({ username });

        // Create user's password
        const passwordExpirationDate = typeof PASSWORD_EXPIRATION_DAYS === 'number' ? new Date(new Date().getTime() + PASSWORD_EXPIRATION_DAYS * 24 * 60 * 60 * 1000) : null;
        await Passwords.create({ hashedPassword, userId: newUser.id, expirationDate: passwordExpirationDate });

        return res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error: any) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export { registerUser };