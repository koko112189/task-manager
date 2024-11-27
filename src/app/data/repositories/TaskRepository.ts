export interface TaskRepository {
    getTasks(): Promise<Task[]>;
    saveTask(task: Task): Promise<void>;
    deleteTask(id: string): Promise<void>;
  }