import jwt, { SignOptions } from 'jsonwebtoken';
import { JWT_EXPIRES_IN, JWT_SECRET } from '#config';

const secretKey = JWT_SECRET;

export function jwtSign(payload: any, options?: SignOptions): string {
    return jwt.sign({
        iss: 'authenticated-todo',
        ...payload
    }, secretKey, { expiresIn: JWT_EXPIRES_IN as SignOptions['expiresIn'], ...options });
}

export function jwtVerify(token: string): any {
    return jwt.verify(token, secretKey);
}
