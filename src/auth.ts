import argon2 from "argon2";

function config(): argon2.Options {
    return {
        type: argon2.argon2id,
        // 64MB
        memoryCost: 2 ** 16,
        // iterations
        timeCost: 3,
        // # of threads
        parallelism: 4
    }
}

export async function CreateUserHash(password: string) {
    return await argon2.hash(password, config());
}
export async function CompareUserHash(password: string, hash: string) {
    return await argon2.verify(hash, password);
}