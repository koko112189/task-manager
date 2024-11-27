import { Injectable } from "@angular/core";
import { Category } from "src/app/domain/models/category";
import { TaskToDo } from "src/app/domain/models/task";

@Injectable({
    providedIn: 'root',
  })
export class LocalCategoryDataSource {
    private localStorageKey = 'categories';
  
    getCategories(): Category[] {
      const categories = localStorage.getItem(this.localStorageKey);
      return categories ? JSON.parse(categories) : [];
    }
  
    saveCategory(category: Category): void {
      const tasks = this.getCategories();
      let newCategory : Category = {id: this.generateId(), name: category.name};
      tasks.push(newCategory);
      localStorage.setItem(this.localStorageKey, JSON.stringify(tasks));
    }

    removecategory(id: string): void {
      const tasks = this.getCategories();
      const index = tasks.findIndex(t => t.id === id);
      if (index !== -1) {
        tasks.splice(index, 1);
        localStorage.setItem(this.localStorageKey, JSON.stringify(tasks));
      }
    }

    private generateId(): string {
        return Math.random().toString(36).substr(2, 9);
      }
    saveAll(categories: Category[]) {
      localStorage.setItem(this.localStorageKey, JSON.stringify(categories));
    }
  }
  