import { Component, Input, input, OnInit } from '@angular/core';
import { TaskCardComponentComponent } from '../task-card-component/task-card-component.component';
import { NgForOf } from '@angular/common';
import { TaskToDo } from 'src/app/domain/models/task';
import { SetTaskCompletedUseCase } from 'src/app/domain/use-cases/set-task-completed-use-case';
import { RemoveTaskUseCase } from 'src/app/domain/use-cases/remove-task-use-case';

@Component({
  selector: 'app-task-list-component',
  templateUrl: './task-list-component.component.html',
  styleUrls: ['./task-list-component.component.scss'],
  standalone: true,
  imports:[NgForOf,TaskCardComponentComponent]
})
export class TaskListComponentComponent{

  @Input() tasks: TaskToDo[] | null= [];

  constructor(private settaskCompletedUseCase: SetTaskCompletedUseCase, private removeTaskUseCase: RemoveTaskUseCase) { }

  async checkAsCompleted(index: number): Promise<void> {
    const taskCompleted = this.tasks![index];
    taskCompleted.isCompleted = true;
    await this.settaskCompletedUseCase.execute(taskCompleted);
  }

  async removetask(index: number): Promise<void> {
    const taskRemove = this.tasks![index];
    await this.removeTaskUseCase.execute(taskRemove);
    this.tasks!.splice(index, 1);
  }

}
