import { EntityRepository, Repository } from 'typeorm';
import { TaskEntity } from './task.entity';

@EntityRepository(TaskEntity)
export class TasksReposiotory extends Repository<TaskEntity> {}
