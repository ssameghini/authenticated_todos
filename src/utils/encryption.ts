import bcrypt from 'bcrypt';
import { PASSWORD_HASHING_ROUNDS } from "#config";

export function encryptPassword(password: string): Promise<string> {
    return bcrypt.hash(password, PASSWORD_HASHING_ROUNDS);
}

export function comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
}
