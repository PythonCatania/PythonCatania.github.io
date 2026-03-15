import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconMeetupComponent } from './icon-meetup.component';

describe('IconMeetupComponent', () => {
  let component: IconMeetupComponent;
  let fixture: ComponentFixture<IconMeetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconMeetupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconMeetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
