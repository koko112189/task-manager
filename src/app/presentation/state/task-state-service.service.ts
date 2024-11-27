import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TaskToDo } from 'src/app/domain/models/task';
import { GetTasksUseCase } from 'src/app/domain/use-cases/GetTasksUseCase';

@Injectable({
  providedIn: 'root',
})
export class TaskStateServiceService {
  private tasksSubject = new BehaviorSubject<TaskToDo[]>([]);
  tasks$ : Observable<TaskToDo[]> = this.tasksSubject.asObservable();
  constructor(private getTasksUseCase: GetTasksUseCase) { }

  loadTasks(): void {
    this.getTasksUseCase.execute().then(tasks => this.tasksSubject.next(tasks));
  }
}
