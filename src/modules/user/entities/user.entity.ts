import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({ type: 'varchar', select: false })
  password: string;

  @Column({ type: 'varchar' })
  fullname: string;

  @Column({ type: 'varchar', default: 'user' })
  role: string;

  @Column({ type: 'boolean', default: true })
  is_active!: boolean;

  @Column({ type: 'int', default: null })
  created_by: number;

  @CreateDateColumn({ type: 'timestamptz' })
  readonly created_at!: Date;

  @Column({ type: 'int', default: null })
  updated_by: number;

  @UpdateDateColumn({ type: 'timestamptz' })
  readonly updated_at!: Date;

  @DeleteDateColumn({ type: 'timestamptz' })
  deleted_at!: Date;
}

export default User;
