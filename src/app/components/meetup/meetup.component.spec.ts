import { TestBed } from '@angular/core/testing';
import { MeetupComponent } from './meetup.component';

describe('MeetupComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetupComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(MeetupComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should contain a link to the Meetup group', async () => {
    const fixture = TestBed.createComponent(MeetupComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const link = compiled.querySelector<HTMLAnchorElement>('#meetup-link');
    expect(link?.href).toContain('meetup.com/python-catania');
  });
});
