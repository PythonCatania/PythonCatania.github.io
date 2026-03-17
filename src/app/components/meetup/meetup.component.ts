import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { IconMeetupComponent } from '../shared/icons/icon-meetup/icon-meetup.component';

@Component({
  selector: 'app-meetup',
  imports: [NgOptimizedImage, IconMeetupComponent, TranslocoModule],
  templateUrl: './meetup.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeetupComponent {}
