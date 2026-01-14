import {ChangeDetectionStrategy, Component, OnInit, signal} from '@angular/core';
import {Containter} from '../../../../shared/components/containter/containter';

@Component({
  selector: 'app-about-me',
  imports: [
    Containter
  ],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMe implements OnInit {
  protected readonly resizerClasses = signal('w-100 transition-[width] duration-500')

  ngOnInit() {
    void this.animateResizer();
  }

  private async animateResizer(): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    this.resizerClasses.set('w-0 transition-[width] duration-1000');

    // 2. Wait for animation to finish
    await new Promise((resolve) => setTimeout(resolve, 1000));

    this.resizerClasses.set('w-0');
  }
}
