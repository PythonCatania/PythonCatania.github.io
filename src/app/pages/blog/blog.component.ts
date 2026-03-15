import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { BASE_URL } from '../../app.config';

interface BlogPost {
  readonly id: number;
  readonly title: string;
  readonly titleEn: string;
  readonly date: string;
  readonly author: string;
  readonly content: string;
  readonly contentEn: string;
  readonly url: string;
}

@Component({
  selector: 'app-blog',
  imports: [TranslocoModule, RouterLink],
  templateUrl: './blog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent {
  private readonly http = inject(HttpClient);
  private readonly translocoService = inject(TranslocoService);
  private readonly baseUrl = inject(BASE_URL);
  protected readonly posts = signal<BlogPost[]>([]);
  protected readonly activeLang = toSignal(this.translocoService.langChanges$, {
    initialValue: this.translocoService.getActiveLang(),
  });

  constructor() {
    this.http.get<BlogPost[]>(`${this.baseUrl}/data/blog-posts.json`).subscribe((data) => {
      this.posts.set(data);
    });
  }
}
