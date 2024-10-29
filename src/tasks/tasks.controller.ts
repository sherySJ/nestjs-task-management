import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.modal';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(
    @Body() CreateTaskDto: CreateTaskDto,
    // @Body('title') title: string, //deprecated, use dto instead
    // @Body('description') description: string,
  ): Task {
    // console.log('title', title);
    // console.log('description', description);

    // return this.tasksService.createTask(title, description);
    return this.tasksService.createTask(CreateTaskDto);
  }
}
