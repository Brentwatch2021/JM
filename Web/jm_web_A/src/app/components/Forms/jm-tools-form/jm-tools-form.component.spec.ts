import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JmToolsFormComponent } from './jm-tools-form.component';

describe('JmToolsFormComponent', () => {
  let component: JmToolsFormComponent;
  let fixture: ComponentFixture<JmToolsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JmToolsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JmToolsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
