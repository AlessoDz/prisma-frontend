import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAdministratorComponent } from './profile-administrator.component';

describe('ProfileAdministratorComponent', () => {
  let component: ProfileAdministratorComponent;
  let fixture: ComponentFixture<ProfileAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileAdministratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
