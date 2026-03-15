import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

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
  imports: [TranslocoModule],
  templateUrl: './blog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent {
  private readonly http = inject(HttpClient);
  private readonly translocoService = inject(TranslocoService);
  protected readonly posts = signal<BlogPost[]>([]);
  protected readonly activeLang = toSignal(this.translocoService.langChanges$, {
    initialValue: this.translocoService.getActiveLang(),
  });

  constructor() {
    this.http.get<BlogPost[]>('/data/blog-posts.json').subscribe((data) => {
      this.posts.set(data);
    });
  }
}
