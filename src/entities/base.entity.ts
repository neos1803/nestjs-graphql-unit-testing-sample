import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@ObjectType()
export class BaseEntity {
  
  @PrimaryGeneratedColumn({
    name: 'id'
  })
  @Field(type => ID, { nullable: false })
  id: number;

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
