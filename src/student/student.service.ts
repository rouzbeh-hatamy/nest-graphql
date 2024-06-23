import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { randomUUID } from 'crypto';
import { Student } from './student.entity';
import { CreateStudentInput } from './student.input';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async getStudents(): Promise<Student[]> {
    return await this.studentRepository.find();
  }

  async getStudent(id: string): Promise<Student> {
    const result = await this.studentRepository.findOne({ where: { id } });
    if (!result) {
      throw new NotFoundException('nadariim');
    }
    return result;
  }

  createStudent(createStudentInput: CreateStudentInput): Promise<Student> {
    const { name } = createStudentInput;

    const student = this.studentRepository.create({
      id: randomUUID(),
      name,
    });

    return this.studentRepository.save(student);
  }

  async getManyStudents(studentIds: string[]): Promise<Student[]> {
    const result = await this.studentRepository.find({
      where: {
        id: In(studentIds),
      },
    });

    return result;
  }
}
