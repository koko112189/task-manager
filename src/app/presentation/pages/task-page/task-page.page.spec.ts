import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskPagePage } from './task-page.page';

describe('TaskPagePage', () => {
  let component: TaskPagePage;
  let fixture: ComponentFixture<TaskPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
