import { Field, ID, ObjectType } from "@nestjs/graphql";
import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
  name: 'religion'
})
@ObjectType()
export class ReligionEntity extends BaseEntity {
  
  @PrimaryGeneratedColumn({
    name: 'id'
  })
  @Field(type => ID, { nullable: false })
  id: number;

  @Column({
    name: 'nama',
    type: 'varchar',
    unique: true,
    nullable: false
  })
  @Field(type => String, { nullable: false })
  name: string;


  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at'
  })
  @Field(type => Date)
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updated_at'
  })
  @Field(type => Date)
  updatedAt: Date;

  @DeleteDateColumn({
    type: 'timestamp',
    name: 'deleted_at'
  })
  @Field(type => Date)
  deletedAt: Date;

}
