import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-header',
  imports: [NgOptimizedImage, RouterLink, RouterLinkActive, TranslocoModule],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly translocoService = inject(TranslocoService);
  private readonly router = inject(Router);
  protected readonly activeLang = signal(this.translocoService.getActiveLang());

  protected toggleLanguage(): void {
    const next = this.activeLang() === 'it' ? 'en' : 'it';
    this.translocoService.setActiveLang(next);
    this.activeLang.set(next);
  }

  protected closeDropdown(event: Event): void {
    let element = (event.target as HTMLElement).closest('details');
    if (element) {
      element.open = false;
    }
  }

  protected scrollTo(event: Event, sectionId: string): void {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigate(['/']);
    }
  }
}
