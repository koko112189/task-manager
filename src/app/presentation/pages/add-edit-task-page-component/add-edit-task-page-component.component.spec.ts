import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddEditTaskPageComponentComponent } from './add-edit-task-page-component.component';

describe('AddEditTaskPageComponentComponent', () => {
  let component: AddEditTaskPageComponentComponent;
  let fixture: ComponentFixture<AddEditTaskPageComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditTaskPageComponentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddEditTaskPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
