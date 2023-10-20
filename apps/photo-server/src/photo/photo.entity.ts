import { Directive, Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
@Directive('@key(fields: "id")')
export class Photo {
  @Field(() => Int)
  declare id: number;

  @Field(() => String)
  declare description: string;

  constructor(obj: Photo) {
    Object.assign(this, obj);
  }
}
