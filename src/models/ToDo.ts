import { DataTypes, Model, Optional } from 'sequelize';
import { getSequelize } from '../database/connector';

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
    public id!: number;
    public title!: string;
    public todo!: string;
    public status!: string;
    public userId!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
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
        },
    },
    {
        sequelize: getSequelize(),
        tableName: 'todos',
    }
);

export default ToDo;