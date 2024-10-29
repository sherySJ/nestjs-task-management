import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.modal';
import { v7 as uuid } from 'uuid';
@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(CreateTaskDto): Task {
    const { title, description } = CreateTaskDto; //destructure so we can use title and description directly
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }
}
