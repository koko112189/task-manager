import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { TaskListComponentComponent } from '../../components/task-list-component/task-list-component.component';
import { from, map, Observable } from 'rxjs';
import { TaskToDo } from 'src/app/domain/models/task';
import { GetTasksUseCase } from 'src/app/domain/use-cases/GetTasksUseCase';
import { TaskStateServiceService } from '../../state/task-state-service.service';
import { Category } from 'src/app/domain/models/category';
import { CategoryStateServiceService } from '../../state/category-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.page.html',
  styleUrls: ['./task-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, TaskListComponentComponent, RouterLink],
  providers: [ GetTasksUseCase]
})
export class TaskPagePage implements OnInit {
  tasks$: Observable<TaskToDo[]>;
  categories$: Observable<Category[]>;
  categoryFilter: any;
  constructor(private taskservice: TaskStateServiceService, private categoriesService: CategoryStateServiceService) {
    this.tasks$ = this.taskservice.tasks$;
    this.categories$ = this.categoriesService.category$;
   }

  ngOnInit() {
    this.taskservice.loadTasks();
    this.categoriesService.loadCategories();
  }

  

filterTasksByCategory(event: Event): void {
  const selectedElement = event.target as HTMLSelectElement;
  const category = selectedElement.value;
  this.tasks$ = this.taskservice.tasks$.pipe(
    map(tasks => tasks.filter(task => task.categoryId === category || category === ''))
  );
}

}
