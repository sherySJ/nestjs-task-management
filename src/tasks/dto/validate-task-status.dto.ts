import { IsEnum } from 'class-validator';
import { TaskStatus } from './task-status.enum';

export class validateTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
