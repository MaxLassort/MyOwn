import { TestBed } from '@angular/core/testing';
import { Home } from './home';
import { provideRouter } from '@angular/router';
import { Game } from '../game/components/game/game.component';
import { RouteEnum } from '../../route.enum';
import { RouterTestingHarness } from '@angular/router/testing';

describe('Home', () => {
  let harness: RouterTestingHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home, Game],
      providers: [provideRouter([
        { path: '', component: Home },
        { path: RouteEnum.GAME, component: Game }
      ])]
    }).compileComponents();

    harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/', Home);
  });

  it('should create and render images', () => {
    expect(harness.routeNativeElement).toBeTruthy();

    const imgElements = harness.routeNativeElement?.querySelectorAll('img');
    expect(imgElements?.length).toBe(2);

    imgElements?.forEach((img) => {
      expect(img.src).toBeTruthy();
      expect(img.alt).toBeTruthy();
    });
  });

  it('should navigate to /game when red pill is clicked', async () => {

    const redPill = harness.routeNativeElement?.querySelector('#red') as HTMLImageElement;

    if (!redPill) {
      console.log('HTML:', harness.routeNativeElement?.innerHTML);
    }

    expect(redPill).toBeTruthy();
    redPill.click();

    expect(harness.routeNativeElement?.textContent).toContain('Hello World!');
  });
});
