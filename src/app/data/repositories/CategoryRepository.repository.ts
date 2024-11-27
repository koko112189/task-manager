import { Injectable } from "@angular/core";
import { Category } from "src/app/domain/models/category";



export abstract class  CategoryRepository {
   abstract getCategories(): Promise<Category[]>;
   abstract addCategory(category: Category): Promise<void>;
   abstract  removeCategory(category: Category): Promise<void>;
  }