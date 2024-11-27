import { TaskRepository } from "src/app/data/repositories/TaskRepository";
import { LocalTaskDataSource } from "src/app/data/sources/local/LocalTaskDataSource";

export class TaskRepositoryImpl implements TaskRepository {
  constructor(private localDataSource: LocalTaskDataSource) { }

  async getTasks(): Promise<Task[]> {
    return this.localDataSource.getTasks();
  }

  async saveTask(task: Task): Promise<void> {
    this.localDataSource.saveTask(task);
  }

  deleteTask(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
