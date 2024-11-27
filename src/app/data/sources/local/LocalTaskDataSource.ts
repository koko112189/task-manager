export class LocalTaskDataSource {
    private localStorageKey = 'tasks';
  
    getTasks(): Task[] {
      const tasks = localStorage.getItem(this.localStorageKey);
      return tasks ? JSON.parse(tasks) : [];
    }
  
    saveTask(task: Task): void {
      const tasks = this.getTasks();
      tasks.push(task);
      localStorage.setItem(this.localStorageKey, JSON.stringify(tasks));
    }
  }
  