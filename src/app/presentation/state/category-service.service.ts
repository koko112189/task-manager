import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Category } from 'src/app/domain/models/category';
import { GetCategoriesuseCase } from 'src/app/domain/use-cases/get-categories-use-case';

@Injectable({
  providedIn: 'root'
})
export class CategoryStateServiceService {

  private categorySubject = new BehaviorSubject<Category[]>([]);
  category$ : Observable<Category[]> = this.categorySubject.asObservable();
  constructor(private getCategoryUseCase: GetCategoriesuseCase) { }

  loadCategories(): void {
    this.getCategoryUseCase.execute().then(categories => this.categorySubject.next(categories));
  }
}
