import { DataTypes, Model, Optional } from 'sequelize';
import { getSequelize } from '../database/connector';
import User from './User';

export enum ToDoStatus {
    PENDING = 'pending',
    IN_PROGRESS = 'in_progress',
    COMPLETED = 'completed',
    ABANDONED = 'abandoned',
}

interface ToDoAttributes {
    id: number;
    title: string;
    todo: string;
    status: string;
    userId: number;
}

interface ToDoCreationAttributes extends Optional<ToDoAttributes, 'id'> {}

class ToDo extends Model<ToDoAttributes, ToDoCreationAttributes> implements ToDoAttributes {
    declare id: number;
    declare title: string;
    declare todo: string;
    declare status: string;
    declare userId: number;
}

ToDo.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        todo: {
            type: new DataTypes.STRING(256),
            allowNull: false,
        },
        status: {
            type: new DataTypes.STRING(128),
            allowNull: false,
            defaultValue: ToDoStatus.PENDING,
        },
        userId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: User,
                key: 'id',
            }
        },
    },
    {
        sequelize: getSequelize(),
        tableName: 'todos',
        timestamps: true,
    }
);

ToDo.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

export default ToDo;