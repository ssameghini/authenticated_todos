import { jwtSign, jwtVerify } from '#utils/jwt';

const JWT_ISSUER = 'authenticated-todo';

describe('JWT helper', () => {
    beforeAll(() => {
        process.env = Object.assign(process.env, { JWT_SECRET: 'secret', JWT_EXPIRES_IN: '1h' });
    });
    describe('jwtSign', () => {
        it('should return a string', () => {
            const token = jwtSign({ id: 1 });
            expect(typeof token).toBe('string');
        });
    });
    describe('jwtVerify', () => {
        it('should return an object', () => {
            const token = jwtSign({ id: 1 });
            const payload = jwtVerify(token);
            expect(typeof payload).toBe('object');
        });
        it('should return the payload and metadata', () => {
            const payload = { id: 1 };
            const token = jwtSign(payload);
            const decoded = jwtVerify(token);
            expect(decoded.id).toBe(payload.id);
            expect(decoded.iss).toBe(JWT_ISSUER);
            expect(decoded.iat).toBeDefined();
            expect(decoded.exp).toBeDefined();
        });
        it('should throw an error if the token is invalid', () => {
            const payload = { id: 1 };
            const token = jwtSign(payload);
            const invalidToken = token.slice(0, -1);
            expect(() => jwtVerify(invalidToken)).toThrow();
        });
        it('should throw an error if the token is expired', () => {
            const payload = { id: 1 };
            const token = jwtSign(payload);
            const expiredToken = jwtSign(payload, { expiresIn: '-1s' });
            expect(() => jwtVerify(expiredToken)).toThrow();
        });
    });
});