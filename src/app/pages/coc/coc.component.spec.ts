import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideTransloco } from '@jsverse/transloco';
import { TranslocoHttpLoader } from '../../services/transloco-loader.service';
import { BASE_URL } from '../../app.config';
import { CocComponent } from './coc.component';

describe('CocComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideTransloco({
          config: { availableLangs: ['it', 'en'], defaultLang: 'it' },
          loader: TranslocoHttpLoader,
        }),
        { provide: BASE_URL, useValue: '' },
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CocComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
