import { TestBed } from '@angular/core/testing';

import { ToolsAPIService } from './tools-api.service';

describe('ToolsAPIService', () => {
  let service: ToolsAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolsAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
