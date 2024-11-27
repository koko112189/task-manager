import { Injectable } from '@angular/core';
import { CategoryRepository } from 'src/app/data/repositories/CategoryRepository.repository';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class AddCategoryUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(category: Category): Promise<void> {
    // Validación: asegúrate de que la categoría no esté vacía ni duplicada.
    if (!category || category.name.trim() === '') {
      throw new Error('The category name is required.');
    }

    const existingCategories = await this.categoryRepository.getCategories();
    if (existingCategories.includes(category)) {
      throw new Error('The category already exists.');
    }

    await this.categoryRepository.addCategory(category);
  }
}
