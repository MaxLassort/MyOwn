import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Breadcrumbs } from './breadcrumbs.component';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { describe, it, expect, beforeEach } from 'vitest';

describe('Breadcrumbs', () => {
  let harness: RouterTestingHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Breadcrumbs],
      providers: [
        provideRouter([
          { path: 'home', component: Breadcrumbs },
          { path: 'resume/about-me', component: Breadcrumbs }
        ])
      ]
    }).compileComponents();

    harness = await RouterTestingHarness.create();
  });

  it('should display the last segment of the initial route', async () => {
    // Given: We navigate to a specific route that renders Breadcrumbs
    await harness.navigateByUrl('/home', Breadcrumbs);

    // Then: The component should display 'home'
    const element = harness.routeNativeElement as HTMLElement;
    expect(element.textContent).toContain('home');
  });

  it('should update the segment after navigation', async () => {
    // Given: Initial navigation
    await harness.navigateByUrl('/home', Breadcrumbs);
    const element = harness.routeNativeElement as HTMLElement;
    expect(element.textContent).toContain('home');

    // When: We navigate to another route
    await harness.navigateByUrl('/resume/about-me', Breadcrumbs);

    // Then: It should display the new last segment 'about-me'
    const newElement = harness.routeNativeElement as HTMLElement;
    expect(newElement.textContent).toContain('about-me');
  });
});
