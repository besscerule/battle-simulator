import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Subscription } from 'rxjs';
import { BattleService } from './services/battle.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    CommonModule,
    MatCardModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(public battleService: BattleService) {}

  teamASizeFormControl  = new FormControl(0);
  teamBSizeFormControl  = new FormControl(0);
  formattedResult = ""
  battleRatioSub: Subscription = new Subscription;

  simulateBattle() {
    const teamASize = this.teamASizeFormControl.value as number
    const teamBSize = this.teamBSizeFormControl.value as number

    this.battleService.calculateBattleRatio(teamASize, teamBSize)
  }

  ngOnInit() {
    this.battleRatioSub = this.battleService
    .getBattleRatioUpdateListener()
    .subscribe((battleRatio) => {
      this.formattedResult = (battleRatio*100).toFixed(2)
    });
  }

  ngOnDestroy() {
    this.battleRatioSub.unsubscribe();
  }
}
