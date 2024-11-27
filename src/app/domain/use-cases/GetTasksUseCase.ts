import { TaskRepository } from "src/app/data/repositories/TaskRepository.repository";
import { TaskToDo } from "../models/task";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })
export class GetTasksUseCase {
    constructor(private taskRepository: TaskRepository) {}
  
    async execute(): Promise<TaskToDo[]> {
      return this.taskRepository.getTasks();
    }
  }
  