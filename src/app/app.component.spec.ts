import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, BrowserAnimationsModule, ReactiveFormsModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('calculateSimulation should return 0.5 if teamASize and teamBSize are the same size', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.calculateSimulation(1, 1)).toEqual(0.5)
    expect(app.calculateSimulation(50, 50)).toEqual(0.5)
    expect(app.calculateSimulation(100, 100)).toEqual(0.5)
    expect(app.calculateSimulation(5000, 5000)).toEqual(0.5)
  });

});
