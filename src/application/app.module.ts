import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { join } from 'path'
import { DatabaseModule } from './infrastructure/config/database.config';
import { ReligionModule } from './infrastructure/modules/religion.module';

@Module({
  imports: [
    DatabaseModule,
    GraphQLFederationModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/resources/schema.gql'),
      playground: true,
      debug: false
    }),
    ReligionModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
