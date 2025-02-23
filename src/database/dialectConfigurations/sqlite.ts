import { Options } from "sequelize";
import { databaseConfig } from "#config";

export default function getSQLiteSequelizeConfiguration(): Options {
    if (!databaseConfig.name) {
        throw new Error('SQLite database configuration missing');
    }
    const sequelizeOptions: Options = {
        dialect: 'sqlite',
        storage: databaseConfig.sqlite.storage ?? ':memory:',
        database: databaseConfig.name,
    };
    if (databaseConfig.user) {
        sequelizeOptions.username = databaseConfig.user;
    }
    if (databaseConfig.password) {
        sequelizeOptions.password = databaseConfig.password;
    }
    return sequelizeOptions;
}