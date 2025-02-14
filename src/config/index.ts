// Database configuration
export const databaseConfig = {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
    sqlite: {
        storage: process.env.DB_SQLITE_STORAGE,
    }
};

// Server configuration
export const PORT = process.env.PORT ?? 3000;

// JWT configuration
export const JWT_SECRET = process.env.JWT_SECRET ?? 'secret';
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN ?? '1h';

// Authentication
export const PASSWORD_EXPIRATION_DAYS = process.env.PASSWORD_EXPIRATION_DAYS ?? 90;
export const PASSWORD_HASHING_ROUNDS = process.env.PASSWORD_HASHING_ROUNDS ?? 10;
