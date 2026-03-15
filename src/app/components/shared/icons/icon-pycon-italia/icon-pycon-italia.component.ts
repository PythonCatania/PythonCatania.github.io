import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-icon-pycon-italia',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      height="1.33em"
      viewBox="0 0 24 24"
    >
      <title>PyCon Italia</title>
      <path fill="currentColor" d="M9 5.1a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
      <path
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        d="M6.7 12v4l-1.8 1.8V12h3.7v4l-1.8 1.8V12m10.8 11.7c.7-.9.7-2.7 0-3.4a7.3 7.3 0 0 1 0-9.3c2.2-2.3 2-7-.2-9.3m-5.8 22V12H.3A11.7 11.7 0 0 1 17.4 1.7a12 12 0 0 1 6.2 10.5v11.5z"
      />
    </svg>
  `,
})
export class IconPyconItaliaComponent {}
