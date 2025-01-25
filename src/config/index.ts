// Database configuration
export const DB_HOST = process.env.DB_HOST ?? 'localhost';
export const DB_PORT = process.env.DB_PORT ?? 3306;
export const DB_USER = process.env.DB_USER ?? 'users';
export const DB_PASSWORD = process.env.DB_PASSWORD ?? 'password';
export const DB_NAME = process.env.DB_NAME ?? 'users';

// Server configuration
export const PORT = process.env.PORT ?? 3000;
export const HOST = process.env.HOST ?? 'localhost';

// JWT configuration
export const JWT_SECRET = process.env.JWT_SECRET ?? 'secret';
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN ?? '1h';

// Authentication
export const PASSWORD_EXPIRATION_DAYS = process.env.PASSWORD_EXPIRATION_DAYS ?? 90;
export const PASSWORD_HASHING_ROUNDS = process.env.PASSWORD_HASHING_ROUNDS ?? 10;
