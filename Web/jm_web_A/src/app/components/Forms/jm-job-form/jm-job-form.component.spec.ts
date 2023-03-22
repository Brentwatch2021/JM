import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JmJobFormComponent } from './jm-job-form.component';

describe('JmJobFormComponent', () => {
  let component: JmJobFormComponent;
  let fixture: ComponentFixture<JmJobFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JmJobFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JmJobFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
