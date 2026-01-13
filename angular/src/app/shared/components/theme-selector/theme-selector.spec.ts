import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ThemeSelector } from './theme-selector';
import { ThemeSelectorHarness } from './theme-selector.harness';
import { ThemeService } from '../../../core/services/theme.service';
import { Theme } from '../../../core/enums/theme.enum';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { Component, signal } from '@angular/core';

// Mock ThemeService
const mockThemeService = {
  theme: signal(Theme.LIGHT),
  setTheme: vi.fn(),
  isDark: vi.fn(() => false),
};

@Component({
  template: '<app-theme-selector></app-theme-selector>',
  imports: [ThemeSelector]
})
class TestHostComponent {}

describe('ThemeSelector', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let harness: ThemeSelectorHarness;
  let themeService: ThemeService;

  beforeEach(async () => {
    // Reset mocks before each test
    vi.clearAllMocks();
    mockThemeService.theme.set(Theme.LIGHT); // Reset to default state

    await TestBed.configureTestingModule({
      imports: [ThemeSelector, TestHostComponent],
      providers: [
        { provide: ThemeService, useValue: mockThemeService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    themeService = TestBed.inject(ThemeService); // Get the mocked service instance

    const loader = TestbedHarnessEnvironment.loader(fixture);
    harness = await loader.getHarness(ThemeSelectorHarness);
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should display the dark mode icon when the theme is LIGHT', async () => {
    // Given: The theme service reports LIGHT theme
    mockThemeService.theme.set(Theme.LIGHT);
    fixture.detectChanges();

    // Then: The button should show the 'dark_mode' icon
    expect(await harness.getIconName()).toBe('dark_mode');
  });

  it('should display the light mode icon when the theme is DARK', async () => {
    // Given: The theme service reports DARK theme
    mockThemeService.theme.set(Theme.DARK);
    fixture.detectChanges();

    // Then: The button should show the 'light_mode' icon
    expect(await harness.getIconName()).toBe('light_mode');
  });

  it('should call ThemeService.setTheme with DARK when toggled from LIGHT', async () => {
    // Given: The theme is LIGHT
    mockThemeService.theme.set(Theme.LIGHT);
    fixture.detectChanges();

    // When: The user clicks the toggle button
    await harness.toggleTheme();

    // Then: The service's setTheme method should be called with DARK
    expect(themeService.setTheme).toHaveBeenCalledWith(Theme.DARK);
  });

  it('should call ThemeService.setTheme with LIGHT when toggled from DARK', async () => {
    // Given: The theme is DARK
    mockThemeService.theme.set(Theme.DARK);
    fixture.detectChanges();

    // When: The user clicks the toggle button
    await harness.toggleTheme();

    // Then: The service's setTheme method should be called with LIGHT
    expect(themeService.setTheme).toHaveBeenCalledWith(Theme.LIGHT);
  });
});
