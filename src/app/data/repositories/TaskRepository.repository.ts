import { TaskToDo } from "src/app/domain/models/task";


export abstract class TaskRepository {
  abstract getTasks(): Promise<TaskToDo[]>;
  abstract saveTask(task: TaskToDo): Promise<void>;
  abstract updatetask(task: TaskToDo): Promise<void>;
  abstract deleteTask(id: string): Promise<void>;
  }