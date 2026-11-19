import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  imports: [TranslocoModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      type="button"
      (click)="themeService.toggle()"
      [attr.aria-label]="label() | transloco"
      [attr.title]="label() | transloco"
      class="flex cursor-pointer items-center rounded-(--radius) border border-(--border) bg-transparent text-inherit transition-colors hover:bg-(--surface)"
      [class]="compact() ? 'px-2 py-1' : 'px-3 py-[0.4rem]'"
    >
      <svg
        aria-hidden="true"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        height="1.25em"
        width="1.25em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        @if (themeService.theme() === 'dark') {
          <circle cx="12" cy="12" r="4" />
          <path
            d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
          />
        } @else {
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        }
      </svg>
    </button>
  `,
})
export class ThemeToggleComponent {
  protected readonly themeService = inject(ThemeService);
  readonly compact = input(false);
  protected readonly label = computed(() =>
    this.themeService.theme() === 'dark' ? 'nav.lightTheme' : 'nav.darkTheme',
  );
}
