import { Query, ResolveReference, Resolver } from "@nestjs/graphql";
import { Photo } from "./photo.entity";

@Resolver(() => Photo)
export class PhotoResolver {
  @Query(() => Photo)
  photo(): Photo {
    return new Photo({ id: 1, description: "test" });
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: number }): Photo {
    return new Photo({ id: reference.id, description: "test" });
  }
}
