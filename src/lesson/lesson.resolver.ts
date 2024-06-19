/* eslint-disable @typescript-eslint/no-unused-vars */
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';

@Resolver((_of) => LessonType)
export class LessonResolver {
  constructor(private readonly lessonService: LessonService) {}

  @Query((_returns) => [LessonType])
  lesson() {
    return this.lessonService.getLessons();
  }

  @Mutation((_returns) => LessonType)
  createLesson(
    @Args('name', { type: () => String }) name: string,
    @Args('startDate', { type: () => String }) startDate: string,
    @Args('endDate', { type: () => String }) endDate: string,
  ) {
    return this.lessonService.createLesson(name, startDate, endDate);
  }
}
