import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CallForSpeakersComponent } from '../../components/call-for-speakers/call-for-speakers.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { MeetupComponent } from '../../components/meetup/meetup.component';
import { PyCataniaComponent } from '../../components/py-catania/py-catania.component';
import { SupportersComponent } from '../../components/supporters/supporters.component';

@Component({
  selector: 'app-home',
  imports: [PyCataniaComponent, MeetupComponent, CallForSpeakersComponent, ContactComponent, SupportersComponent],
  template: `
    <app-py-catania />
    <app-meetup />
    <app-call-for-speakers />
    <app-contact />
    <app-supporters />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
