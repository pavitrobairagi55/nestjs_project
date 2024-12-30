import { Entity, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class BaseModel {
  @Column({ default: false })
  is_deleted: boolean

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date

  @Column()
  created_by: string

  @Column()
  updated_by: string
}