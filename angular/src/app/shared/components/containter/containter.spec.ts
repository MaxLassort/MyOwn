import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Containter } from './containter';

describe('Containter', () => {
  let component: Containter;
  let fixture: ComponentFixture<Containter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Containter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Containter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
