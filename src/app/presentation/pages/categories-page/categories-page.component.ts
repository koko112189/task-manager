import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Category } from 'src/app/domain/models/category';
import { AddCategoryUseCase } from 'src/app/domain/use-cases/AddCategoryUseCase';
import { GetCategoriesuseCase } from 'src/app/domain/use-cases/get-categories-use-case';
import { removeCategoryUseCase } from 'src/app/domain/use-cases/remove-category-use-case';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterLink],
})
export class CategoriesPageComponent  {
  categories: Category[] = [];
  categoryForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private addcategoryUseCase: AddCategoryUseCase, private getcategoriesUseCase: GetCategoriesuseCase, private removecategoryUseCase: removeCategoryUseCase) {
      this.getCategories();
      this.categoryForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
      })
    } 
   

  async getCategories(): Promise<void> {
    this.categories = await this.getcategoriesUseCase.execute();
  }
    
  async addCategory() : Promise<void> {
    if (this.categoryForm.valid) {
      try{
        let newCategory : Category  = {id: this.generateId(), name: this.categoryForm.value.name};

        await this.addcategoryUseCase.execute(newCategory);
        this.categories.push(newCategory); 
        this.categoryForm.reset();
      }
      catch (error) {
        console.log(error);
      }
      
    }
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  async removeCategory(index: number): Promise<void> {
    const categoryToRemove = this.categories[index];
    await this.removecategoryUseCase.execute(categoryToRemove);
    this.categories.splice(index, 1);
  }
  }





