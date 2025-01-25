import { DataTypes, Model } from 'sequelize';
import { getSequelize } from '../database/connector';

class Passwords extends Model {
    public id!: number;
    public hashedPassword!: string;
    public active!: boolean;
    public userId!: number;
    public createdAt!: Date;
    public updatedAt!: Date;
    public expirationDate!: Date;
}

Passwords.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        hashedPassword: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        userId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        expirationDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        sequelize: getSequelize(),
        tableName: 'passwords',
    }
);

export default Passwords;