/* eslint-disable @typescript-eslint/no-unused-vars */
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { StudentType } from './student.type';
import { StudentService } from './student.service';
import { CreateStudentInput } from './student.input';

@Resolver((_of) => StudentType)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Query((_returns) => [StudentType])
  getAllStudents() {
    return this.studentService.getStudents();
  }

  @Query((_returns) => StudentType)
  getStudent(@Args('id', { type: () => String }) id: string) {
    return this.studentService.getStudent(id);
  }

  @Mutation((_returns) => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }
}
