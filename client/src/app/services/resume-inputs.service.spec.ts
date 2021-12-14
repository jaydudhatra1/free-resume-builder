import { TestBed } from '@angular/core/testing';

import { ResumeInputsService } from './resume-inputs.service';

describe('ResumeInputsService', () => {
  let service: ResumeInputsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResumeInputsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
