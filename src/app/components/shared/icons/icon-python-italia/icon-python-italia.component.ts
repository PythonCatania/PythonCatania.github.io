import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-icon-python-italia',
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
      <title>Python Italia</title>
      <path
        fill="currentColor"
        d="M13.96 0a6.45 6.45 0 0 0-6.44 6.44v3.6c.06 1.08 1.66 1.08 1.72 0v-3.6c0-2.6 2.12-4.72 4.72-4.72a5.43 5.43 0 1 1 0 10.86H8.38a5.5 5.5 0 0 0-5.5 5.5v2.64a3.18 3.18 0 1 0 6.36 0V16.8c.07-1.22-1.79-1.22-1.72 0v3.92a1.46 1.46 0 1 1-2.91 0v-2.65a3.78 3.78 0 0 1 3.77-3.77h5.58a7.15 7.15 0 1 0 0-14.3Z"
      />
    </svg>
  `,
})
export class IconPythonItaliaComponent {}
