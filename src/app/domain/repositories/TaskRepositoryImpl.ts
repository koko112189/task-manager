import { TaskRepository } from "src/app/data/repositories/TaskRepository.repository";
import { LocalTaskDataSource } from "src/app/data/sources/local/LocalTaskDataSource";
import { TaskToDo } from "../models/task";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class TaskRepositoryImpl implements TaskRepository {
  constructor(private localDataSource: LocalTaskDataSource) { }


  async getTasks(): Promise<TaskToDo[]> {
    return this.localDataSource.getTasks();
  }

  async saveTask(task: TaskToDo): Promise<void> {
    this.localDataSource.saveTask(task);
  }

  async updatetask(task: TaskToDo): Promise<void> {
    this.localDataSource.updateTask(task);
  }

  async deleteTask(id: string): Promise<void> {
    this.localDataSource.removeTask(id);
  }
}
