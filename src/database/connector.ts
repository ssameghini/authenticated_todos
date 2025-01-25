import { Options, Sequelize } from 'sequelize';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from '../config';

let sequelize: Sequelize;

function initiateSequelize() {
    const databasePort = Number(DB_PORT);
    const sequelizeOptions: Options = {
        dialect: 'mysql',
        host: DB_HOST,
        port: Number.isInteger(databasePort) ? databasePort : 3306,
        logging: false,
        define: {
            timestamps: false
        },
    };
    sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, sequelizeOptions);
}

export function getSequelize() {
    if (!sequelize) {
        initiateSequelize();
    }
    return sequelize;
}
