import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAdministratorComponent } from './sidebar-administrator.component';

describe('SidebarAdministratorComponent', () => {
  let component: SidebarAdministratorComponent;
  let fixture: ComponentFixture<SidebarAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarAdministratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
