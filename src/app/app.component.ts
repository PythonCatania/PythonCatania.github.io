import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { PyCataniaComponent } from './components/py-catania/py-catania.component';
import { MeetupComponent } from './components/meetup/meetup.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    PyCataniaComponent,
    MeetupComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    for (const anchor of document.querySelectorAll<HTMLAnchorElement>('a')) {
      if (
        anchor.host !== window.location.host &&
        !anchor.getAttribute('data-umami-event')
      ) {
        anchor.setAttribute('data-umami-event', 'Click ' + anchor.ariaLabel);
        anchor.setAttribute('data-umami-event-element', 'anchor');
        anchor.setAttribute('data-umami-event-event', 'onclick');
        anchor.setAttribute('data-umami-event-id', anchor.id);
        anchor.setAttribute('data-umami-event-url', anchor.href);
      }
    }
  }
}
