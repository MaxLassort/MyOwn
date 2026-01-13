import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Navigation } from './navigation';
import { provideRouter } from '@angular/router';
import { describe, it, expect, beforeEach } from 'vitest';

describe('Navigation', () => {
  let component: Navigation;
  let fixture: ComponentFixture<Navigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navigation],
      providers: [
        provideRouter([]) // Provide basic router configuration
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navigation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
