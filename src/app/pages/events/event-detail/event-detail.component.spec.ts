import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { TranslocoTestingModule } from '@jsverse/transloco';
import { EventDetailComponent } from './event-detail.component';
import { BASE_URL } from '../../../app.config';

describe('EventDetailComponent', () => {
  let component: EventDetailComponent;
  let fixture: ComponentFixture<EventDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        EventDetailComponent,
        TranslocoTestingModule.forRoot({ langs: { en: {}, it: {} }, translocoConfig: { availableLangs: ['en', 'it'], defaultLang: 'it' } }),
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: BASE_URL, useValue: '' },
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => '313050179' } } } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EventDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
