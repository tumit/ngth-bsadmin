import { TestBed } from '@angular/core/testing';
import { GlobalRef } from './global.ref';


describe('GlobalRef', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const ref: GlobalRef = TestBed.get(GlobalRef);
    expect(ref).toBeTruthy();
  });
});
