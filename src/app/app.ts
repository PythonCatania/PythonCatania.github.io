import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  ngAfterViewInit(): void {
    document.querySelectorAll('a').forEach((a) => {
      if (
        a.host !== window.location.host &&
        !a.getAttribute('data-umami-event')
      ) {
        a.setAttribute('data-umami-event', 'Click ' + a.ariaLabel);
        a.setAttribute('data-umami-event-element', 'anchor');
        a.setAttribute('data-umami-event-event', 'onclick');
        a.setAttribute('data-umami-event-id', a.id);
        a.setAttribute('data-umami-event-url', a.href);
      }
    });
  }
}
