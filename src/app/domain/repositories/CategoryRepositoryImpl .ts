import { Injectable } from '@angular/core';
import { CategoryRepository } from 'src/app/data/repositories/CategoryRepository.repository';
import { LocalCategoryDataSource } from 'src/app/data/sources/local/LocalCategoryDataSource';
import { LocalTaskDataSource } from 'src/app/data/sources/local/LocalTaskDataSource';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryRepositoryImpl implements CategoryRepository {
  private readonly storageKey = 'categories';

  constructor(private localDataSource: LocalCategoryDataSource) { }

  async getCategories(): Promise<Category[]> {
    return this.localDataSource.getCategories();
  }

  async addCategory(category: Category): Promise<void> {
    this.localDataSource.saveCategory(category);
  }

  async removeCategory(category: Category): Promise<void> {
    this.localDataSource.removecategory(category.id);
  }

}
