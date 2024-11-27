import { Injectable } from '@angular/core';
import { TaskRepository } from 'src/app/data/repositories/TaskRepository.repository';
import { TaskToDo } from '../models/task';


@Injectable({
  providedIn: 'root',
})
export class AddTaskUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute(task: TaskToDo): Promise<void> {
    if (!task.title || task.title.trim() === '') {
      throw new Error('The task title is required.');
    }

    await this.taskRepository.saveTask(task);
  }
}
