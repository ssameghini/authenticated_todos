import { Options, Sequelize } from 'sequelize';
import { databaseConfig } from '../config';
import getMySQLSequelizeConfiguration from './dialectConfigurations/mysql';
import getSQLiteSequelizeConfiguration from './dialectConfigurations/sqlite';

let sequelize: Sequelize;

function getSequelizeConfiguration(): Options {
    let sequelizeOptions: Options;
    switch (databaseConfig.dialect) {
        case 'mysql':
            sequelizeOptions = getMySQLSequelizeConfiguration();
            break;
        case 'sqlite':
        default:
            sequelizeOptions = getSQLiteSequelizeConfiguration();
            break;
    }
    sequelizeOptions.logging = false;
    sequelizeOptions.define = {
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
    };
    return sequelizeOptions;
}

function initiateSequelize(): void {
    const sequelizeOptions = getSequelizeConfiguration();
    sequelize = new Sequelize(sequelizeOptions);
}

export function getSequelize(): Sequelize {
    if (!sequelize) {
        initiateSequelize();
    }
    return sequelize;
}
