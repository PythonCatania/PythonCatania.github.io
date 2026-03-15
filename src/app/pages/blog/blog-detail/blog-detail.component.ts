import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { BASE_URL } from '../../../app.config';

interface BlogPost {
  readonly id: number;
  readonly title: string;
  readonly titleEn: string;
  readonly date: string;
  readonly author: string;
  readonly coverImage?: string;
  readonly content: string;
  readonly contentEn: string;
  readonly fullContent: string;
  readonly fullContentEn: string;
}

@Component({
  selector: 'app-blog-detail',
  imports: [TranslocoModule, RouterLink],
  templateUrl: './blog-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogDetailComponent {
  private readonly http = inject(HttpClient);
  private readonly route = inject(ActivatedRoute);
  private readonly translocoService = inject(TranslocoService);
  private readonly baseUrl = inject(BASE_URL);

  protected readonly post = signal<BlogPost | null>(null);
  protected readonly activeLang = toSignal(this.translocoService.langChanges$, {
    initialValue: this.translocoService.getActiveLang(),
  });

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.http.get<BlogPost[]>(`${this.baseUrl}/data/blog-posts.json`).subscribe((posts) => {
      const found = posts.find((post) => post.id === id) ?? null;
      this.post.set(found);
    });
  }

  protected formatContent(content: string): string {
    return content.replace(/\n/g, '<br>');
  }
}
