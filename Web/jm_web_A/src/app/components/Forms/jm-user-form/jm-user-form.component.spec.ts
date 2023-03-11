import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JmUserFormComponent } from './jm-user-form.component';

describe('JmUserFormComponent', () => {
  let component: JmUserFormComponent;
  let fixture: ComponentFixture<JmUserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JmUserFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JmUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
