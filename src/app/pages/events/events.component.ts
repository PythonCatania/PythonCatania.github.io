import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { BASE_URL } from '../../app.config';

interface MeetupEvent {
  readonly id: number;
  readonly title: string;
  readonly date: string;
  readonly image?: string;
  readonly description: string;
  readonly descriptionEn: string;
  readonly attendees: number;
  readonly url: string;
}

@Component({
  selector: 'app-events',
  imports: [TranslocoModule, RouterLink],
  templateUrl: './events.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsComponent {
  private readonly http = inject(HttpClient);
  private readonly translocoService = inject(TranslocoService);
  protected readonly baseUrl = inject(BASE_URL);
  protected readonly events = signal<MeetupEvent[]>([]);
  protected readonly activeLang = toSignal(this.translocoService.langChanges$, {
    initialValue: this.translocoService.getActiveLang(),
  });

  constructor() {
    this.http.get<MeetupEvent[]>(`${this.baseUrl}/data/events.json`).subscribe((data) => {
      this.events.set(data);
    });
  }
}
