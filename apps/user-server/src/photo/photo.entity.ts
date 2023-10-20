import { Directive, Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
@Directive("@extends")
@Directive('@key(fields: "id")')
export class Photo {
  @Field(() => Int)
  @Directive("@external")
  declare id: number;
}
