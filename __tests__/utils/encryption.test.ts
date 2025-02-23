import { comparePasswords, encryptPassword } from '#utils/encryption';

describe('Encryption helper', () => {
    it('Should encrypt a password', async () => {
        const password = 'password';
        const encryptedPassword = await encryptPassword(password);
        expect(encryptedPassword).not.toBe(password);
    });
    describe('Should validate a password against an encrypted password', () => {
        it('Should validate a correct password', async () => {
            const password = 'password';
            const encryptedPassword = await encryptPassword(password);
            const isValid = await comparePasswords(password, encryptedPassword);
            expect(isValid).toBe(true);
        });
        it('Should invalidate an incorrect password', async () => {
            const password = 'password';
            const encryptedPassword = await encryptPassword(password);
            const isValid = await comparePasswords('wrongPassword', encryptedPassword);
            expect(isValid).toBe(false);
        });
    });
});