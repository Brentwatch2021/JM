import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JmVehicleFormComponent } from './jm-vehicle-form.component';

describe('JmVehicleFormComponent', () => {
  let component: JmVehicleFormComponent;
  let fixture: ComponentFixture<JmVehicleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JmVehicleFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JmVehicleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
