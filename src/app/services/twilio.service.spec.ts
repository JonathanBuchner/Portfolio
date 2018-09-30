import { TestBed } from '@angular/core/testing';

import { TwilioService } from './twilio.service';

describe('TwilioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TwilioService = TestBed.get(TwilioService);
    expect(service).toBeTruthy();
  });
});
