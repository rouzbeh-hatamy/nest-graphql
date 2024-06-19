import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm';
import { randomUUID } from 'crypto';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private lessonRepository: Repository<Lesson>,
  ) {}

  async getLessons(): Promise<Lesson[]> {
    const result = await this.lessonRepository.find();
    return result;
  }

  createLesson(name, startDate, endDate): Promise<Lesson> {
    const lesson = this.lessonRepository.create({
      id: randomUUID(),
      name,
      startDate,
      endDate,
    });

    return this.lessonRepository.save(lesson);
  }
}
