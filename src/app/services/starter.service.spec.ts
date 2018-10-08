import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { StarterService } from './starter.service';

describe('StarterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [StarterService]
    });
  });

  it('should be created', inject([StarterService], (service: StarterService) => {
    expect(service).toBeTruthy();
  }));
});
