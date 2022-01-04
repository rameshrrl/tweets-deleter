import { randomBytes } from 'crypto';

export const generateNonce = () => {

    const length = 32;

    return randomBytes(Math.ceil(length * 3 / 4))
        .toString('base64')
        .slice(0, length)
        .replace(/\+/g, '0')
        .replace(/\//g, '0');
}
