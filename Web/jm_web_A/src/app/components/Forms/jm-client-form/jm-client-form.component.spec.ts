import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JmClientFormComponent } from './jm-client-form.component';

describe('JmClientFormComponent', () => {
  let component: JmClientFormComponent;
  let fixture: ComponentFixture<JmClientFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JmClientFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JmClientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
