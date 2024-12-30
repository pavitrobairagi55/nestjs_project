import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { BaseModel } from './base.model'

@Entity()
export class Users extends BaseModel {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  first_name: string

  @Column()
  last_name: string

  @Column({ unique: true })
  email: string

  @Column()
  phone: string

  @Column()
  dob: string

  @Column()
  gender: string

  @Column({ default: false })
  isActive: boolean

  @Column()
  password: string

  @Column('text', { array: true, default: '{}' })
  auth_tokens: string[]
}