import { TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { TranslocoTestingModule } from '@jsverse/transloco';

describe('HomeComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslocoTestingModule.forRoot({
          langs: { it: {}, en: {} },
          translocoConfig: { defaultLang: 'it' },
        }),
      ],
    });
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
