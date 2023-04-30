import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Sales {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ default: "default-value" })
  public type: string;

  @Column({ default: "default-value" })
  public date: string;

  @Column({ default: "default-value" })
  public product: string;

  @Column({ default: 0 })
  public value: number;

  @Column({ default: "default-value" })
  public salesperson: string;

  @CreateDateColumn({ type: "timestamp" })
  public createdAt!: Date;

  @UpdateDateColumn({ type: "timestamp" })
  public updatedAt!: Date;
}