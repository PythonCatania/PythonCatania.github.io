import { TestBed } from '@angular/core/testing';
import { TranslocoTestingModule } from '@jsverse/transloco';
import { SupportersComponent } from './supporters.component';

describe('SupportersComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslocoTestingModule.forRoot({
          langs: {
            it: { supporters: { title: 'Sostenitori', groups: { networks: 'Reti', mediaPartners: 'Media Partner', communityPartners: 'Community Partner' } } },
            en: { supporters: { title: 'Supporters', groups: { networks: 'Networks', mediaPartners: 'Media Partners', communityPartners: 'Community Partners' } } },
          },
          translocoConfig: { defaultLang: 'it' },
        }),
      ],
    });
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(SupportersComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
