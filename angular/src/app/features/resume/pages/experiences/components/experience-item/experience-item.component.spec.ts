import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceItem } from './experience-item.component';
import { Experience } from '../../../../../../core/models/experience.model';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { describe, it, expect, beforeEach } from 'vitest';
import {TechBadge} from '../tech-badge/tech-badge';


// Mock TechBadge component
@Component({
  selector: 'app-tech-badge',
  template: '<span>{{label}}</span>',
  standalone: true
})
class MockTechBadge {
  @Input() label: string = '';
}

// Host component to test required inputs
@Component({
  template: `<app-experience-item [experience]="experience" />`,
  imports: [ExperienceItem],
  standalone: true
})
class TestHostComponent {
  experience: Experience = {
    title: 'Senior Developer',
    company: 'Tech Corp',
    description: 'Building awesome things',
    period: { start: new Date('2022-01-01'), end: new Date('2023-01-01') },
    techs: ['Angular', 'TypeScript']
  };
}

describe('ExperienceItem', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent, MockTechBadge]
    })
    .overrideComponent(ExperienceItem, {
      remove: { imports: [TechBadge] },
      add: { imports: [MockTechBadge] }
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    const item = fixture.debugElement.query(By.directive(ExperienceItem));
    expect(item).toBeTruthy();
  });

  it('should display experience details', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Senior Developer');
    expect(compiled.textContent).toContain('Tech Corp');
    expect(compiled.textContent).toContain('Building awesome things');
  });

  it('should render tech badges', () => {
    const badges = fixture.debugElement.queryAll(By.css('app-tech-badge'));
    expect(badges.length).toBe(2);
  });
});
