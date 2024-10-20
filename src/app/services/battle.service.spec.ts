import { TestBed } from '@angular/core/testing';

import { BattleService } from './battle.service';

describe('BattleService', () => {
  let service: BattleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BattleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('calculateSimulation should return 0.5 if teamASize and teamBSize are the same size', () => {
    expect(service.calculateBattleRatio(1, 1)).toEqual(0.5)
    expect(service.calculateBattleRatio(50, 50)).toEqual(0.5)
    expect(service.calculateBattleRatio(100, 100)).toEqual(0.5)
    expect(service.calculateBattleRatio(5000, 5000)).toEqual(0.5)
  });
});
