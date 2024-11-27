import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from 'src/app/domain/models/category';
import { AddTaskUseCase } from 'src/app/domain/use-cases/AddTaskUseCase';
import { CategoryStateServiceService } from '../../state/category-service.service';
import { TaskToDo } from 'src/app/domain/models/task';

@Component({
  selector: 'app-add-edit-task-page-component',
  templateUrl: './add-edit-task-page-component.component.html',
  styleUrls: ['./add-edit-task-page-component.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
})
export class AddEditTaskPageComponentComponent  implements OnInit {
  taskForm : FormGroup;
  categories$: Observable<Category[]>;
  categoriesList : Category[] = [];
  
  constructor(
    private formBuilder: FormBuilder,
    private addTaskUseCase: AddTaskUseCase,
    private router: Router,
    private categoriesService: CategoryStateServiceService) {
      this.categories$ = this.categoriesService.category$;
      this.categories$.subscribe(categories => this.categoriesList = categories);
    this.taskForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      category:{},
      completed: [false]
    });
   }

   async saveTask(): Promise<void> {
    if(this.taskForm.valid) {
      try {
        let newTask : TaskToDo = { id: this.generateId(),title : this.taskForm.value.name, category: this.taskForm.value.category,categoryId: this.taskForm.value.category, isCompleted: this.taskForm.value.completed };
        console.log("Task saved sucessfully", newTask);
        await this.addTaskUseCase.execute(newTask);
        this.router.navigate(['/main']);
      } catch (error) {
        console.error('Error adding task:', error);
      }
     
    }
   }

   private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  ngOnInit() {this.categoriesService.loadCategories();}

}
