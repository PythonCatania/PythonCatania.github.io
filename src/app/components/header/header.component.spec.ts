import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HeaderComponent } from './header.component';
import { TranslocoTestingModule } from '@jsverse/transloco';

describe('HeaderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslocoTestingModule.forRoot({
          langs: {
            it: { nav: { home: 'PyCatania', nextMeetup: 'Prossimo Meetup', contacts: 'Contatti', supporters: 'Sostenitori', community: 'Community', blog: 'Blog', events: 'Eventi', about: 'Chi siamo' } },
            en: { nav: { home: 'PyCatania', nextMeetup: 'Next Meetup', contacts: 'Contacts', supporters: 'Supporters', community: 'Community', blog: 'Blog', events: 'Events', about: 'About us' } },
          },
          translocoConfig: { defaultLang: 'it' },
        }),
      ],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should default to italian language', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const component = fixture.componentInstance;
    expect(component['activeLang']()).toBe('it');
  });

  it('should toggle language on button click', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const component = fixture.componentInstance;
    component['toggleLanguage']();
    expect(component['activeLang']()).toBe('en');
  });
});
