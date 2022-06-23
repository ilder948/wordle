import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class GeneratedWords extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  word: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAd: Date

}