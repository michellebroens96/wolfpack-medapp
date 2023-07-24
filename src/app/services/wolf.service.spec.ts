import { TestBed } from '@angular/core/testing';

import { WolfService } from './wolf.service';

describe('WolfService', () => {
  let service: WolfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WolfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
