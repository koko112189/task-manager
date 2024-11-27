import { Injectable } from '@angular/core';
import { TaskRepository } from 'src/app/data/repositories/TaskRepository.repository';
import { TaskToDo } from '../models/task';


@Injectable({
  providedIn: 'root',
})
export class SetTaskCompletedUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute(task: TaskToDo): Promise<void> {
    

    await this.taskRepository.updatetask(task);
  }
}
