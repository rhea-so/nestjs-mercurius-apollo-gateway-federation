import { IntrospectAndCompose } from "@apollo/gateway";
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          pollIntervalInMs: 5000,
          subgraphs: [
            { name: "user", url: "http://localhost:3001/graphql" },
            { name: "photo", url: "http://localhost:3002/graphql" },
          ],
        }),
      },
    }),
  ],
})
export class AppModule {}
