
import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js'

export const Task = sequelize.define("Task", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  taskName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  taskDetails: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  completed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  priority: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 10
    }
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dateToFinish: {
    type: DataTypes.DATE,
    allowNull: false,
  }
}, {
  tableName: 'Tasks',
  createdAt: false,
  updatedAt: false,
});