import { DataTypes, Model } from 'sequelize';
import { getSequelize } from '#database/connector';
import User from './User';

class Passwords extends Model {
    declare id: number;
    declare hashedPassword: string;
    declare active: boolean;
    declare userId: number;
    declare createdAt: Date;
    declare updatedAt: Date;
    declare expirationDate: Date;
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
            unique: 'active_user_password',
        },
        userId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            unique: 'active_user_password',
            references: {
                model: User,
                key: 'id',
            },
        },
        expirationDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        sequelize: getSequelize(),
        tableName: 'passwords',
        timestamps: true,
    }
);

Passwords.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

export default Passwords;