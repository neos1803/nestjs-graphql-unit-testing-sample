import { Resolver, Query, Args, Int, Mutation } from "@nestjs/graphql";
import { InjectRepository } from "@nestjs/typeorm";
import { ReligionEntity } from "src/entities/religion.entity";
import { Repository } from "typeorm";
import { ReligionArg, ReligionPayload } from "../types/religion.payload";
import { PaginationPayload } from "../types/pagination.payload";
import { checkFilterArg, checkPagination, checkSearchArg, isCanDeleteData, isCanGetData } from "../utils/check-arg";

@Resolver(of => ReligionEntity)
export class ReligionResolver {

  constructor(
    @InjectRepository(ReligionEntity) private readonly religionRepository: Repository<ReligionEntity>
  ) { }

  @Query(returns => [ReligionEntity], { name: 'getAllReligion' })
  async getAllReligion(
    @Args() paginationPayload: PaginationPayload 
  ) {
    return this.religionRepository.find(checkPagination(paginationPayload))
  }

  @Query(returns => ReligionEntity, { name: 'getReligion' })
  async getReligion(
    @Args('id', { type: () => Int, nullable: false }) id: number
  ) {
    const Religion = await this.religionRepository.findOne(id);
    isCanGetData(Religion, id)
    return Religion
  }

  @Query(returns  => [ReligionEntity], { name: 'searchReligion' })
  async searchReligion(
    @Args() ReligionPayload: ReligionArg
  ) {
    const where = checkSearchArg(ReligionPayload);
    return this.religionRepository.find({ where });
  }

  @Query(returns => [ReligionEntity], { name: 'filterReligion' })
  async filterReligion(@Args() ReligionPayload: ReligionArg) {
    const where = checkFilterArg(ReligionPayload);
    return this.religionRepository.find({ where })
  }

  @Mutation(returns => ReligionEntity)
  async createReligion(
    @Args('Religion', { type: () => ReligionPayload }) ReligionPayload: ReligionPayload
  ) {
    return this.religionRepository.save(ReligionPayload)
  }

  @Mutation(returns => ReligionEntity)
  async updateReligion(
    @Args('Religion', { type: () => ReligionPayload }) ReligionPayload: ReligionPayload,
    @Args('id', { type: () => Int, nullable: false }) id: number
  ) {
    const update = await this.religionRepository.findOne(id)
    isCanGetData(update, id)
    return this.religionRepository.save({
      ...update, ...ReligionPayload
    })
  }

  @Mutation(returns => Boolean)
  async deleteReligion(
    @Args('id', { type: () => Int, nullable: false }) id: number
  ) {
    const softDelete = await this.religionRepository.softDelete(id)
    isCanDeleteData(softDelete, id)
    return true
  }

}
