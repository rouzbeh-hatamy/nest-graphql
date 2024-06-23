import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { CreateLessonInput } from './lesson.input';

@Resolver((_of) => LessonType)
export class LessonResolver {
  constructor(private readonly lessonService: LessonService) {}

  @Query((_returns) => [LessonType])
  getAllLessons() {
    return this.lessonService.getLessons();
  }

  @Query((_returns) => LessonType)
  getLesson(@Args('id', { type: () => String }) id: string) {
    return this.lessonService.getLesson(id);
  }

  @Mutation((_returns) => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.lessonService.createLesson(createLessonInput);
  }
}
