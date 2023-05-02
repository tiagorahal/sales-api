import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sales {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type: string;

  @Column()
  date: string;

  @Column()
  product: string;

  @Column()
  value: string;

  @Column()
  salesperson: string;
}