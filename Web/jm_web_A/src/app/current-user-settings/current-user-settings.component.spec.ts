import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentUserSettingsComponent } from './current-user-settings.component';

describe('CurrentUserSettingsComponent', () => {
  let component: CurrentUserSettingsComponent;
  let fixture: ComponentFixture<CurrentUserSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentUserSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentUserSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
