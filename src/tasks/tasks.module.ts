import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksRepository } from './tasks.repository';
import { Task } from './task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task])], // Register Task entity
  controllers: [TasksController],
  providers: [TasksService, TasksRepository], // Register TasksRepository
})
export class TasksModule {}
