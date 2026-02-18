import {TestBed} from '@angular/core/testing';
import {Home} from './home';
import {provideRouter} from '@angular/router';
import {Game} from '../game/components/game/game.component';
import {RouterTestingHarness} from '@angular/router/testing';
import {ThemeService} from '../../core/services/theme.service';
import {Theme} from '../../core/enums/theme.enum';
import {beforeEach, describe, expect, it, vi} from 'vitest';
import {signal} from '@angular/core';
import {PAGES} from '../../core/config/pages.config';


describe('Home', () => {
  let harness: RouterTestingHarness;

  // Mock ThemeService
  const mockThemeService = {
    theme: signal(Theme.LIGHT),
    setTheme: vi.fn(),
    isDark: vi.fn(() => false),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home, Game],
      providers: [
        provideRouter([
          { path: '', component: Home },
          // On utilise le chemin sans le slash initial pour la définition de la route
          { path: PAGES.GAME.path.substring(1), component: Game }
        ]),
        { provide: ThemeService, useValue: mockThemeService }
      ]
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

  // it('should navigate to /game when red pill is clicked', async () => {
  //
  //   const redPill = harness.routeNativeElement?.querySelector('#red') as HTMLImageElement;
  //
  //   if (!redPill) {
  //     console.log('HTML:', harness.routeNativeElement?.innerHTML);
  //   }
  //
  //   expect(redPill).toBeTruthy();
  //
  //   // Simulation du clic
  //   redPill.click();
  //
  //   // Attente de la détection de changement et de la navigation
  //   await harness.fixture.whenStable();
  //
  //   // Vérification que le composant Game est bien affiché
  //   // (On suppose que Game affiche "Hello World!" ou un contenu spécifique,
  //   // sinon il faudrait vérifier l'URL ou un élément spécifique de Game)
  //   expect(harness.routeNativeElement?.textContent).toContain('Hello World!');
  // });
});
