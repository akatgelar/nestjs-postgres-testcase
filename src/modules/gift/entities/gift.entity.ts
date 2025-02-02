import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class Gift {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', unique: true })
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'float' })
  price: number;

  @Column({ type: 'int', default: '0' })
  stock: number;

  @Column({ type: 'float', default: '0' })
  count_rating: number;

  @Column({ type: 'int', default: '0' })
  count_review: number;

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

export default Gift;
