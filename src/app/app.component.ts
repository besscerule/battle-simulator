import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

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
export class AppComponent {

  teamASizeFormControl  = new FormControl(0);
  teamBSizeFormControl  = new FormControl(0);
  formattedResult = ""

  simulateBattle() {
    const teamASize = this.teamASizeFormControl.value as number
    const teamBSize = this.teamBSizeFormControl.value as number

    const result = this.calculateSimulation(teamASize, teamBSize)

    this.formattedResult = (result*100).toFixed(2)
  }

  calculateSimulation(teamASize: number, teamBSize: number) {
    // this is where you actually do the calculation
    return teamASize/(teamASize + teamBSize)
  }
}
