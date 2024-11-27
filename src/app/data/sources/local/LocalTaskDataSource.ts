import { Injectable } from "@angular/core";
import { TaskToDo } from "src/app/domain/models/task";

@Injectable({
    providedIn: 'root',
  })
export class LocalTaskDataSource {
    private localStorageKey = 'tasks';
  
    getTasks(): TaskToDo[] {
      const tasks = localStorage.getItem(this.localStorageKey);
      return tasks ? JSON.parse(tasks) : [];
    }
  
    saveTask(task: TaskToDo): void {
      const tasks = this.getTasks();
      tasks.push(task);
      localStorage.setItem(this.localStorageKey, JSON.stringify(tasks));
    }

    updateTask(task: TaskToDo): void {
      const tasks = this.getTasks();
      const index = tasks.findIndex(t => t.id === task.id);
      if (index !== -1) {
        tasks[index] = task;
        localStorage.setItem(this.localStorageKey, JSON.stringify(tasks));
      }
    }

    removeTask(id: string): void {
      const tasks = this.getTasks();
      const index = tasks.findIndex(t => t.id === id);
      if (index !== -1) {
        tasks.splice(index, 1);
        localStorage.setItem(this.localStorageKey, JSON.stringify(tasks));
      }
    }
  }
  