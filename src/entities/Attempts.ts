import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToMany, JoinTable } from 'typeorm'
import { GeneratedWords } from './GeneratedWords'

@Entity()
export class Attempts extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  attempt: number

  @Column({nullable: true})
  wordUser: string

  @ManyToMany(() => GeneratedWords)
  @JoinTable()
  word: GeneratedWords[]
  
  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAd: Date

}


