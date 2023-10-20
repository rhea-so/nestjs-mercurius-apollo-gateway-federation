import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import {
  MercuriusFederationDriver,
  MercuriusFederationDriverConfig,
} from "@nestjs/mercurius";
import { UserModule } from "./user/user.module";
import { Photo } from "./photo/photo.entity";

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusFederationDriverConfig>({
      driver: MercuriusFederationDriver,
      autoSchemaFile: { path: "schema.gql", federation: 1 },
      graphiql: true,
      buildSchemaOptions: {
        orphanedTypes: [Photo],
      },
    }),
    UserModule,
  ],
})
export class AppModule {}
