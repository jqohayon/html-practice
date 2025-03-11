import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Feedback extends Model {
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  message: string;
} 