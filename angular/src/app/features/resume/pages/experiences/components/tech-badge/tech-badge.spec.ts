import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TechBadge } from './tech-badge';
import { describe, it, expect, beforeEach } from 'vitest';

describe('TechBadge', () => {
  let component: TechBadge;
  let fixture: ComponentFixture<TechBadge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechBadge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechBadge);
    component = fixture.componentInstance;

    // Set required input
    fixture.componentRef.setInput('label', 'Angular');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the label', () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.textContent).toContain('Angular');
  });
});
