import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs';
import { marked } from 'marked';
import { TranslocoService } from '@jsverse/transloco';
import { BASE_URL } from '../../app.config';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // Styles target markdown injected via innerHTML, which emulated encapsulation never matches.
  encapsulation: ViewEncapsulation.None,
})
export class PrivacyPolicyComponent {
  private readonly http = inject(HttpClient);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly translocoService = inject(TranslocoService);
  private readonly baseUrl = inject(BASE_URL);

  protected readonly content = signal<SafeHtml>('');

  constructor() {
    this.translocoService.langChanges$
      .pipe(switchMap((lang) => this.http.get(`${this.baseUrl}/privacy-policy.${lang}.md`, { responseType: 'text' })))
      .subscribe((markdown) => {
        const html = marked.parse(markdown) as string;
        this.content.set(this.sanitizer.bypassSecurityTrustHtml(html));
      });
  }
}
