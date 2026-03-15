import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

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
  imports: [TranslocoModule],
  templateUrl: './events.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsComponent {
  private readonly http = inject(HttpClient);
  private readonly translocoService = inject(TranslocoService);
  protected readonly events = signal<MeetupEvent[]>([]);
  protected readonly activeLang = toSignal(this.translocoService.langChanges$, {
    initialValue: this.translocoService.getActiveLang(),
  });

  constructor() {
    this.http.get<MeetupEvent[]>('/data/events.json').subscribe((data) => {
      this.events.set(data);
    });
  }
}
