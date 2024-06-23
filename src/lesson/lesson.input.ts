/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, ID, InputType } from '@nestjs/graphql';
import { IsDateString, IsUUID, MinLength } from 'class-validator';

@InputType()
export class CreateLessonInput {
  @MinLength(4)
  @Field()
  name: string;

  @IsDateString()
  @Field()
  startDate: string;

  @IsDateString()
  @Field()
  endDate: string;

  @Field((_type) => [ID], { defaultValue: [] })
  students: string[];
}
@InputType()
export class AssignStudentsToLessonInput {
  @IsUUID()
  @Field((_type) => ID)
  lessonId: string;

  @IsUUID('4', { each: true })
  @Field((_type) => [ID])
  studentIds: string[];
}
