import { ArgsType, Field, InputType } from "@nestjs/graphql";

@InputType()
export class ReligionPayload {
  @Field(type => String, { nullable: false })
  name: string;
}

@ArgsType()
export class ReligionArg {
  @Field(type => String, { nullable: true })
  name?: string;
}
