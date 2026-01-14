import { Component, inject, computed } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcumbs',
  imports: [],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.css',
})
export class Breadcrumbs {
  private router = inject(Router);

  private currentRoute = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event) => (event as NavigationEnd).urlAfterRedirects)
    ),
    { initialValue: this.router.url }
  );

  lastSegment = computed(() => {
    const url = this.currentRoute();
    if (!url) return '';
    const segments = url.split('/');
    return segments[segments.length - 1] || segments[segments.length - 2] || '';
  });
}
