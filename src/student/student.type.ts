import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Student')
export class StudentType {
  @Field((_type) => ID)
  id: string;

  @Field()
  name: string;
}
