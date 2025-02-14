import { DataTypes, Model, Optional } from 'sequelize';
import { getSequelize } from '../database/connector';

interface UserAttributes {
    id: number;
    username: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    declare id: number;
    declare username: string;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    },
    {
        sequelize: getSequelize(),
        tableName: 'users',
        timestamps: true,
    }
);

export default User;