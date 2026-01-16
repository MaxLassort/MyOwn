import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Education } from './education';
import { describe, it, expect, beforeEach } from 'vitest';

describe('Education', () => {
  let component: Education;
  let fixture: ComponentFixture<Education>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Education]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Education);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the main sections', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const headings = compiled.querySelectorAll('h1');

    // We expect at least "Education" and "Certifications & Training"
    expect(headings.length).toBeGreaterThanOrEqual(2);
    expect(headings[0].textContent).toContain('Education');
    expect(headings[1].textContent).toContain('Certifications');
  });

  it('should have Schema.org microdata attributes', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    // Check for main Person schema
    const mainSchema = compiled.querySelector('[itemtype="https://schema.org/Person"]');
    expect(mainSchema).toBeTruthy();

    // Check for EducationalOrganization schema
    const eduSchema = compiled.querySelector('[itemtype="https://schema.org/EducationalOrganization"]');
    expect(eduSchema).toBeTruthy();
  });
});
