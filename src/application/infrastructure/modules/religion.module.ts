import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ReligionEntity } from "src/entities/religion.entity";
import { ReligionResolver } from "../resolvers/religion.resolver";

@Module({
  imports: [
    TypeOrmModule.forFeature([ReligionEntity])
  ],
  providers: [ReligionResolver]
})
export class ReligionModule { }
