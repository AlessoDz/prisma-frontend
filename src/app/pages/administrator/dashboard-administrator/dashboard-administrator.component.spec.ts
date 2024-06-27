import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdministratorComponent } from './dashboard-administrator.component';

describe('DashboardAdministratorComponent', () => {
  let component: DashboardAdministratorComponent;
  let fixture: ComponentFixture<DashboardAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardAdministratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
