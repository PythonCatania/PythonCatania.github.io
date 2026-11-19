import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TranslocoTestingModule } from '@jsverse/transloco';
import { COOKIE_CONSENT_STORAGE_KEY, CookieConsentComponent } from './cookie-consent.component';

describe('CookieConsentComponent', () => {
  beforeEach(async () => {
    localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY);
    await TestBed.configureTestingModule({
      imports: [
        CookieConsentComponent,
        TranslocoTestingModule.forRoot({
          langs: { it: {}, en: {} },
          translocoConfig: { defaultLang: 'it' },
        }),
      ],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  afterEach(() => localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY));

  async function render(): Promise<HTMLElement> {
    const fixture = TestBed.createComponent(CookieConsentComponent);
    await fixture.whenStable();
    return fixture.nativeElement as HTMLElement;
  }

  it('should show the banner when not dismissed', async () => {
    const element = await render();
    expect(element.querySelector('[role="dialog"]')).toBeTruthy();
  });

  it('should hide the banner and remember the choice on dismiss', async () => {
    const fixture = TestBed.createComponent(CookieConsentComponent);
    await fixture.whenStable();
    const element = fixture.nativeElement as HTMLElement;
    element.querySelector('button')?.click();
    await fixture.whenStable();
    expect(element.querySelector('[role="dialog"]')).toBeNull();
    expect(localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY)).toBe('dismiss');
  });

  it('should not show the banner when previously dismissed', async () => {
    localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, 'dismiss');
    const element = await render();
    expect(element.querySelector('[role="dialog"]')).toBeNull();
  });
});
