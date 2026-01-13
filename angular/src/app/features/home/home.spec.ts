import { TestBed } from '@angular/core/testing';
import { Home } from './home';
import { provideRouter } from '@angular/router';
import { Game } from '../game/components/game/game.component';
import { RouteEnum } from '../../route.enum';
import { RouterTestingHarness } from '@angular/router/testing';
import { ThemeService } from '../../core/services/theme.service';
import { Theme } from '../../core/enums/theme.enum';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { signal } from '@angular/core';

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
          { path: RouteEnum.GAME, component: Game }
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

  it('should navigate to /game when red pill is clicked', async () => {
    const redPill = harness.routeNativeElement?.querySelector('#red') as HTMLImageElement;
    expect(redPill).toBeTruthy();

    redPill.click();

    // Wait for navigation
    await harness.fixture.whenStable();

    // Verify navigation happened by checking the active component
    expect(harness.routeComponent).toBeInstanceOf(Game);
  });
});
