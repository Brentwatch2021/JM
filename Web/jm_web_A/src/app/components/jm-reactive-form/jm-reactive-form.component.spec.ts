import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JMReactiveFormComponent } from './jm-reactive-form.component';

describe('JMReactiveFormComponent', () => {
  let component: JMReactiveFormComponent;
  let fixture: ComponentFixture<JMReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JMReactiveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JMReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
