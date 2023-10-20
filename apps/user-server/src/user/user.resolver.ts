import { Query, ResolveField, Resolver } from "@nestjs/graphql";
import { User } from "./user.entity";
import { Photo } from "@src/photo/photo.entity";

@Resolver(() => User)
export class UserResolver {
  @Query(() => User)
  user(): User {
    return new User({ id: 1, name: "John Doe" });
  }

  @ResolveField(() => [Photo])
  photos(): { __typename: "Photo"; id: number }[] {
    return [{ __typename: "Photo", id: 1 }];
  }
}
