import {IconButtonDirective} from './icon-button.directive';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, DebugElement, ElementRef, inject, Renderer2} from '@angular/core';
import {By} from '@angular/platform-browser';

@Component({
  template: `
    <div iconButton>Hello</div>
    <h2>No Highlight</h2> `,
  imports: [IconButtonDirective],
})
class TestComponent {
}

describe('IconButton', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconButtonDirective, TestComponent]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.query(
      By.directive(IconButtonDirective)
    ).nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should set initial styles', () => {
    expect(element.style.cursor).toBe('pointer');
    expect(element.style.transition).toContain('transform 300ms ease-in-out');
  });
  it('should scale up on mouseenter', () => {
    element.dispatchEvent(new Event('mouseenter'));
    fixture.detectChanges();

    expect(element.style.transform).toBe('scale(1.1)');
  });
  it('should scale down on mousedown', () => {
    element.dispatchEvent(new Event('mousedown'));
    fixture.detectChanges();

    expect(element.style.transform).toBe('scale(1.045)');
  });
  it('should reset scale on mouseleave', () => {
    element.dispatchEvent(new Event('mouseenter'));
    element.dispatchEvent(new Event('mouseleave'));
    fixture.detectChanges();

    expect(element.style.transform).toBe('scale(1)');
  });

  it('should scale up on mouseup', () => {
    element.dispatchEvent(new Event('mouseup'));
    fixture.detectChanges();

    expect(element.style.transform).toBe('scale(1.1)');
  });
});
