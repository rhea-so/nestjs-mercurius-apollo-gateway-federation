import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User {
  @Field(() => Int)
  declare id: number;

  @Field(() => String)
  declare name: string;

  constructor(obj: User) {
    Object.assign(this, obj);
  }
}
