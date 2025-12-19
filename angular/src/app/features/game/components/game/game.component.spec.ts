import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Game} from './game.component';

describe('Game', () => {
  let component: Game;
  let fixture: ComponentFixture<Game>;
  let iframe: HTMLIFrameElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Game]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Game);
    component = fixture.componentInstance;
    iframe = fixture.nativeElement.querySelector('iframe');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should start the game', () => {
    expect(iframe).toBeTruthy();
  });
});
