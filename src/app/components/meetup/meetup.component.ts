import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconMeetupComponent } from '../shared/icons/icon-meetup/icon-meetup.component';

@Component({
  selector: 'app-meetup',
  imports: [IconMeetupComponent],
  templateUrl: './meetup.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeetupComponent {}
