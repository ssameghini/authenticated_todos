import { Options } from "sequelize";
import { databaseConfig } from "../../config";

export default function getMySQLSequelizeConfiguration(): Options {
    if (!databaseConfig.user || !databaseConfig.password || !databaseConfig.name) {
        throw new Error('MySQL database configuration missing');
    }
    const sequelizeOptions: Options = {
        dialect: 'mysql',
        host: databaseConfig.host,
        port: databaseConfig.port ? parseInt(databaseConfig.port) : 3306,
        database: databaseConfig.name,
        username: databaseConfig.user,
        password: databaseConfig.password,
    };
    return sequelizeOptions;
}