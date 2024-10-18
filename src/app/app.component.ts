import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BattleDetailsComponent } from "./battle-details/battle-details.component";
import { BattleResultComponent } from "./battle-result/battle-result.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BattleDetailsComponent, BattleResultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'battle-simulator';
}
