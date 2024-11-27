import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TaskToDo } from 'src/app/domain/models/task';

@Component({
  selector: 'app-task-card-component',
  standalone: true,
  templateUrl: './task-card-component.component.html',
  styleUrls: ['./task-card-component.component.scss'],
  imports: [NgIf]
})
export class TaskCardComponentComponent {
  @Input() task!: TaskToDo ;
 
 
}
