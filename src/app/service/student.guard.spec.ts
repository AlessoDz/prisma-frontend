import { TestBed } from '@angular/core/testing';

import { StudenGuard } from './student.guard';

describe('StudenGuard', () => {
  let guard: StudenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StudenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
