import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BattleService {

  constructor() { }
  private battleRatioUpdated = new Subject<number>();
  battleRatio = 0

  getBattleRatio() {
    return this.battleRatio
  }

  battle(teamASize: number, teamBSize: number) {
    this.battleRatio = this.calculateBattleRatio(teamASize, teamBSize)
    this.battleRatioUpdated.next(this.battleRatio)
  }

  calculateBattleRatio(teamASize: number, teamBSize: number) {
    // this is where you actually do the calculation
    return teamASize/(teamASize + teamBSize)
  }

  getBattleRatioUpdateListener() {
    return this.battleRatioUpdated.asObservable();
  }

}
