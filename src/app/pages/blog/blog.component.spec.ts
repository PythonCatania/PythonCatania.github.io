import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { BlogComponent } from './blog.component';
import { TranslocoTestingModule } from '@jsverse/transloco';

describe('BlogComponent', () => {
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
      imports: [
        TranslocoTestingModule.forRoot({
          langs: { it: { blog: { title: 'Blog', noContent: 'Nessun articolo.', readMore: 'Leggi di più' } }, en: {} },
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
    const fixture = TestBed.createComponent(BlogComponent);
    httpMock.expectOne('/data/blog-posts.json').flush([]);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
