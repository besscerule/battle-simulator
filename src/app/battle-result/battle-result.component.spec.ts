import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleResultComponent } from './battle-result.component';

describe('BattleResultComponent', () => {
  let component: BattleResultComponent;
  let fixture: ComponentFixture<BattleResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BattleResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BattleResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render battle-result works', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('battle-result works!');
  });
});
