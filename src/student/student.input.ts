import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CreateStudentInput {
  @MinLength(4)
  @Field()
  name: string;
}
