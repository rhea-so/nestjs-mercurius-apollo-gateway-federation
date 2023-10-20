import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import {
  MercuriusFederationDriver,
  MercuriusFederationDriverConfig,
} from "@nestjs/mercurius";
import { PhotoModule } from "./photo/photo.module";

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusFederationDriverConfig>({
      driver: MercuriusFederationDriver,
      autoSchemaFile: { path: "schema.gql", federation: 1 },
      graphiql: true,
    }),
    PhotoModule,
  ],
})
export class AppModule {}
