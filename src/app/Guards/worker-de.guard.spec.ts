import { TestBed } from '@angular/core/testing';

import { WorkerDeGuard } from './worker-de.guard';

describe('WorkerDeGuard', () => {
  let guard: WorkerDeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WorkerDeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
