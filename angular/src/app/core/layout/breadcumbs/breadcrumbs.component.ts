import {Component, inject, computed} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  imports: [],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.css',
})
export class Breadcrumbs {
  readonly router = inject(Router);

  readonly currentRoute = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event:NavigationEnd) => (event).urlAfterRedirects)
    ),
    {initialValue: this.router.url}
  );

  lastSegment = computed(() => {
    const url = this.currentRoute();
    if (!url) return '';
    const segments = url.split('/');
    return segments.at(-1) || segments.at(-2) || '';
  });
}
