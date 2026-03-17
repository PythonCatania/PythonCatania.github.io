import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { BASE_URL } from '../../../app.config';
import { LightboxComponent } from '../../../components/shared/lightbox/lightbox.component';

interface Speaker {
  readonly name: string;
  readonly image?: string;
  readonly topic: string;
  readonly topicEn: string;
}

interface MeetupEvent {
  readonly id: number;
  readonly title: string;
  readonly date: string;
  readonly image?: string;
  readonly description: string;
  readonly descriptionEn: string;
  readonly fullDescription: string;
  readonly fullDescriptionEn: string;
  readonly attendees: number;
  readonly url: string;
  readonly videos?: string[];
  readonly gallery: string[];
  readonly speakers: Speaker[];
}

@Component({
  selector: 'app-event-detail',
  imports: [TranslocoModule, RouterLink, NgOptimizedImage, LightboxComponent],
  templateUrl: './event-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventDetailComponent {
  private readonly http = inject(HttpClient);
  private readonly route = inject(ActivatedRoute);
  private readonly translocoService = inject(TranslocoService);
  protected readonly baseUrl = inject(BASE_URL);

  protected readonly event = signal<MeetupEvent | null>(null);
  protected readonly lightboxIndex = signal<number | null>(null);
  protected readonly activeLang = toSignal(this.translocoService.langChanges$, {
    initialValue: this.translocoService.getActiveLang(),
  });

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.http.get<MeetupEvent[]>(`${this.baseUrl}/data/events.json`).subscribe((events) => {
      const found = events.find((event) => event.id === id) ?? null;
      this.event.set(found);
    });
  }

  protected videoThumbnail(videoId: string): string {
    return `https://img.youtube.com/vi/${videoId.split('?')[0]}/0.jpg`;
  }

  protected videoWatchUrl(videoId: string): string {
    const [id, params] = videoId.split('?');
    return params ? `https://www.youtube.com/watch?v=${id}&${params}` : `https://www.youtube.com/watch?v=${id}`;
  }

  protected openLightbox(index: number): void {
    this.lightboxIndex.set(index);
  }
}
