import Passwords from "./Password";
import ToDo from "./ToDo";
import User from "./User";

export async function syncModels(): Promise<void> {
    const modelsSyncPromises = [
        User.sync(),
        Passwords.sync(),
        ToDo.sync()
    ];
    await Promise.all(modelsSyncPromises);
}