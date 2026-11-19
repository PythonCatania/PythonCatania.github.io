import { TestBed } from '@angular/core/testing';
import { TranslocoTestingModule } from '@jsverse/transloco';
import { THEME_STORAGE_KEY } from '../../../services/theme.service';
import { ThemeToggleComponent } from './theme-toggle.component';

describe('ThemeToggleComponent', () => {
  beforeEach(async () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'dark');
    await TestBed.configureTestingModule({
      imports: [
        ThemeToggleComponent,
        TranslocoTestingModule.forRoot({
          langs: { it: {}, en: {} },
          translocoConfig: { defaultLang: 'it' },
        }),
      ],
    }).compileComponents();
  });

  afterEach(() => localStorage.removeItem(THEME_STORAGE_KEY));

  it('should switch between dark and light theme on click', async () => {
    const fixture = TestBed.createComponent(ThemeToggleComponent);
    await fixture.whenStable();
    const button = (fixture.nativeElement as HTMLElement).querySelector('button');
    expect(document.documentElement.dataset['theme']).toBe('dark');
    button?.click();
    await fixture.whenStable();
    expect(document.documentElement.dataset['theme']).toBe('light');
    button?.click();
    await fixture.whenStable();
    expect(document.documentElement.dataset['theme']).toBe('dark');
  });
});
