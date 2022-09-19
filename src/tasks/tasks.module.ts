import { Module } from '@nestjs/common';
import { TaskEntity } from './task.entity';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity])],
  providers: [TasksService],
})
export class TasksModule {}
