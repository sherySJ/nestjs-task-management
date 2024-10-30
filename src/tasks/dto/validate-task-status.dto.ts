import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task.model';

export class validateTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
