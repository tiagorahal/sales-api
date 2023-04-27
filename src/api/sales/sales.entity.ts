import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Sales {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({default: 'default-value' })
  public type: string;

  @Column({default: 'default-value' })
  public date: string;

  @Column({default: 'default-value' })
  public product: string;

  @Column({default: 'default-value' })
  public value: string;

  @Column({default: 'default-value' })
  public salesperson: string;

  @Column({ type: 'boolean', default: false })
  public isDeleted: boolean;

  /*
   * Create and Update Date Columns
   */

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;
}