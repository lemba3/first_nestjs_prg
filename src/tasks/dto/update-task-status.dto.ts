import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task.model';

export class UpdateTaskStatusDTo {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
