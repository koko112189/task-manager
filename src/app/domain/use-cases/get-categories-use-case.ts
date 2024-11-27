import { TaskRepository } from "src/app/data/repositories/TaskRepository.repository";
import { TaskToDo } from "../models/task";
import { Injectable } from "@angular/core";
import { Category } from "../models/category";
import { CategoryRepository } from "src/app/data/repositories/CategoryRepository.repository";

@Injectable({
    providedIn: 'root',
  })
export class GetCategoriesuseCase {
    constructor(private categoryRepository: CategoryRepository) {}
  
    async execute(): Promise<Category[]> {
      return this.categoryRepository.getCategories();
    }
  }
  