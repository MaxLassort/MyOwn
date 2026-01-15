import {Component, inject, computed} from '@angular/core';
import {ThemeSelector} from '../../../shared/components/theme-selector/theme-selector';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';
import {filter, map, startWith} from 'rxjs/operators';
import {FileType} from '../../../core/enums/file-type.enum';

@Component({
  selector: 'app-footer',
  imports: [
    ThemeSelector
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  private readonly router = inject(Router);

  private getChildTitle(route: ActivatedRoute): string {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route.snapshot?.data?.['title'] || '';
  }

  readonly file = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      startWith(null),
      map(() => {
        const root = this.router.routerState.root;
        return root ? this.getChildTitle(root) : '';
      })
    ),
    {initialValue: ''}
  );

  readonly fileType = computed(() => {
    const fileName = this.file();
    if (!fileName) return '';

    const extension = fileName.split('.').pop()?.toUpperCase();

    if (extension && extension in FileType) {
      return FileType[extension as keyof typeof FileType];
    }

    return FileType.UNKNOWN;
  });
}
