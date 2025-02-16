import { Request, Response, NextFunction } from 'express';
import { jwtVerify } from '@src/utils/jwt';
import User from '@src/models/User';

export interface AuthenticatedRequest extends Request {
    user?: any;
}
const authenticate = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwtVerify(token);
        const user = await User.findByPk(decoded.sub); 
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.user = user;
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: 'Unauthorized' });
    }
};

export default authenticate;