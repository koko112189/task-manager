import { Injectable } from '@angular/core';
import { TaskRepository } from 'src/app/data/repositories/TaskRepository.repository';
import { TaskToDo } from '../models/task';
import { CategoryRepository } from 'src/app/data/repositories/CategoryRepository.repository';
import { Category } from '../models/category';


@Injectable({
  providedIn: 'root',
})
export class removeCategoryUseCase {
  constructor(private categoryRepository: CategoryRepository) { }

  async execute(category: Category): Promise<void> {


    await this.categoryRepository.removeCategory(category);
  }
}
