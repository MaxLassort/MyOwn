import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DilaogComponent } from './dilaog-component';

describe('DilaogComponent', () => {
  let component: DilaogComponent;
  let fixture: ComponentFixture<DilaogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DilaogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DilaogComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
