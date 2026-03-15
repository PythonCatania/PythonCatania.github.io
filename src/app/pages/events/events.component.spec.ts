import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { EventsComponent } from './events.component';
import { TranslocoTestingModule } from '@jsverse/transloco';

describe('EventsComponent', () => {
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
      imports: [
        TranslocoTestingModule.forRoot({
          langs: { it: { events: { title: 'Eventi', past: 'Passati', noContent: 'Nessun evento.', attendees: 'partecipanti' } }, en: {} },
          translocoConfig: { defaultLang: 'it' },
        }),
      ],
    });
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(EventsComponent);
    httpMock.expectOne('/data/events.json').flush([]);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
