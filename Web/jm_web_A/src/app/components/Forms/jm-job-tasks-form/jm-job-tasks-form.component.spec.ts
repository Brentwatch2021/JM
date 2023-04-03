import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JmJobTasksFormComponent } from './jm-job-tasks-form.component';

describe('JmJobTasksFormComponent', () => {
  let component: JmJobTasksFormComponent;
  let fixture: ComponentFixture<JmJobTasksFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JmJobTasksFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JmJobTasksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
