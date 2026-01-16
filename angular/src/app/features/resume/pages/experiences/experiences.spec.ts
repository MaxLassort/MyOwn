import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Experiences } from './experiences';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { describe, it, expect, beforeEach } from 'vitest';
import { Experience } from '../../../../core/models/experience.model';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {ExperienceItem} from './components/experience-item/experience-item.component';

// Mock ExperienceItem
@Component({
  selector: 'app-experience-item',
  template: '<div>Experience Item</div>',
  standalone: true
})
class MockExperienceItem {
  @Input() experience!: Experience;
}

// Mock FaIconComponent
@Component({
  selector: 'fa-icon',
  template: '',
  standalone: true
})
class MockFaIcon {
  @Input() icon: any;
}

describe('Experiences', () => {
  let component: Experiences;
  let fixture: ComponentFixture<Experiences>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Experiences]
    })
    .overrideComponent(Experiences, {
      remove: { imports: [FaIconComponent, ExperienceItem] },
      add: { imports: [MockFaIcon, MockExperienceItem] }
    })
    .compileComponents();

    fixture = TestBed.createComponent(Experiences);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render experience items', () => {
    const items = fixture.debugElement.queryAll(By.css('app-experience-item'));
    if (component.experiences.length > 0) {
      expect(items.length).toBe(component.experiences.length);
    }
  });

  it('should have a timeline structure', () => {
    const timeline = fixture.nativeElement.querySelector('.timeline');
    expect(timeline).toBeTruthy();
  });
});
