import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JmToolsSelectionFormComponent } from './jm-tools-selection-form.component';

describe('JmToolsSelectionFormComponent', () => {
  let component: JmToolsSelectionFormComponent;
  let fixture: ComponentFixture<JmToolsSelectionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JmToolsSelectionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JmToolsSelectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
