import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TransactionType {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  type: string;

  @Column()
  description?: string;

  @Column()
  nature?: string;

  @Column()
  signal?: string;
}