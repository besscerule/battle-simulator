import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleDetailsComponent } from './battle-details.component';

describe('BattleDetailsComponent', () => {
  let component: BattleDetailsComponent;
  let fixture: ComponentFixture<BattleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BattleDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BattleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
