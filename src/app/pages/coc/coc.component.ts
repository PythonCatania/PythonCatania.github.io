import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs';
import { marked } from 'marked';
import { TranslocoService } from '@jsverse/transloco';
import { BASE_URL } from '../../app.config';

@Component({
  selector: 'app-coc',
  templateUrl: './coc.component.html',
  styleUrl: './coc.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CocComponent {
  private readonly http = inject(HttpClient);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly translocoService = inject(TranslocoService);
  private readonly baseUrl = inject(BASE_URL);

  protected readonly content = signal<SafeHtml>('');

  constructor() {
    this.translocoService.langChanges$
      .pipe(switchMap((lang) => this.http.get(`${this.baseUrl}/coc.${lang}.md`, { responseType: 'text' })))
      .subscribe((markdown) => {
        const html = marked.parse(markdown) as string;
        this.content.set(this.sanitizer.bypassSecurityTrustHtml(html));
      });
  }
}
