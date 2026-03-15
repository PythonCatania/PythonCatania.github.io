import { TestBed } from '@angular/core/testing';
import { TranslocoTestingModule } from '@jsverse/transloco';
import { CallForSpeakersComponent } from './call-for-speakers.component';

describe('CallForSpeakersComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslocoTestingModule.forRoot({
          langs: {
            it: { callForSpeakers: { title: 'Call for Speaker', description: '...', cta: 'Proponi un talk' } },
            en: { callForSpeakers: { title: 'Call for Speakers', description: '...', cta: 'Propose a talk' } },
          },
          translocoConfig: { defaultLang: 'it' },
        }),
      ],
    });
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CallForSpeakersComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
