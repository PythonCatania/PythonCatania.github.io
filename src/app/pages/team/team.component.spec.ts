import { TestBed } from '@angular/core/testing';
import { TeamComponent } from './team.component';
import { TranslocoTestingModule } from '@jsverse/transloco';

describe('TeamComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslocoTestingModule.forRoot({
          langs: { it: { about: { title: 'Chi siamo', description: 'Il team' } }, en: {} },
          translocoConfig: { defaultLang: 'it' },
        }),
      ],
    });
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TeamComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should list 3 members', () => {
    const fixture = TestBed.createComponent(TeamComponent);
    expect(fixture.componentInstance['members'].length).toBe(3);
  });
});
