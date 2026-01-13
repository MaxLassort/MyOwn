import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeSelector } from './theme-selector';
import { Theme } from '../../../core/enums/theme.enum';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';

describe('ThemeSelector', () => {
  let component: ThemeSelector;
  let fixture: ComponentFixture<ThemeSelector>;

  // Mock localStorage
  const localStorageMock = (() => {
    let store: { [key: string]: string } = {};
    return {
      getItem: vi.fn((key: string) => store[key] || null),
      setItem: vi.fn((key: string, value: string) => {
        store[key] = value.toString();
      }),
      removeItem: vi.fn((key: string) => {
        delete store[key];
      }),
      clear: vi.fn(() => {
        store = {};
      }),
    };
  })();

  beforeEach(async () => {
    // Replace global localStorage with mock
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    });

    // Reset mock calls and store before each test
    localStorageMock.clear();
    vi.clearAllMocks();

    await TestBed.configureTestingModule({
      imports: [ThemeSelector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeSelector);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    document.documentElement.removeAttribute('data-theme');
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should initialize with default theme (LIGHT) if localStorage is empty', () => {
    fixture.detectChanges();
    expect(component.currentTheme()).toBe(Theme.LIGHT);
    expect(document.documentElement.dataset['theme']).toBe(Theme.LIGHT);
  });

  it('should initialize with saved theme from localStorage', () => {
    localStorageMock.getItem.mockReturnValue(Theme.DARK);

    // Re-create component to trigger ngOnInit with mocked value
    fixture = TestBed.createComponent(ThemeSelector);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.currentTheme()).toBe(Theme.DARK);
    expect(document.documentElement.dataset['theme']).toBe(Theme.DARK);
  });

  it('should update theme, localStorage, and document attribute when setTheme is called', () => {
    fixture.detectChanges();

    component.setTheme(Theme.DARK);

    expect(component.currentTheme()).toBe(Theme.DARK);
    expect(window.localStorage.setItem).toHaveBeenCalledWith('theme', Theme.DARK);
    expect(document.documentElement.dataset['theme']).toBe(Theme.DARK);

    component.setTheme(Theme.LIGHT);

    expect(component.currentTheme()).toBe(Theme.LIGHT);
    expect(window.localStorage.setItem).toHaveBeenCalledWith('theme', Theme.LIGHT);
    expect(document.documentElement.dataset['theme']).toBe(Theme.LIGHT);
  });
});
