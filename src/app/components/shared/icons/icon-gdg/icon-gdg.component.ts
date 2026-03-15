import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-icon-gdg',
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
      <title>Google Developer Group Catania</title>
      <path
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        d="M15.37 17.62c.32 0 .63-.1.95-.26l6.74-3.9-4.69-1.74L14.42 14a1.94 1.94 0 0 0-.68 2.63c.37.69 1 1 1.63 1zM5.8 12.21l3.9-2.27c.89-.52 1.2-1.68.68-2.63a1.94 1.94 0 0 0-2.64-.68L1 10.53Z"
      />
      <path
        fill="currentColor"
        d="M22.11 13.95c.69 0 1.32-.36 1.63-.94.53-.9.22-2.11-.68-2.64l-6.74-3.9c-.9-.52-2.1-.2-2.63.69-.53.9-.22 2.1.68 2.63l6.74 3.9c.32.16.69.26 1 .26zM8.68 17.8c.69 0 1.32-.37 1.63-.95.53-.9.22-2.1-.68-2.63l-6.74-3.9c-.9-.53-2.1-.21-2.63.69-.53.89-.22 2.1.68 2.63l6.74 3.9c.37.2.69.26 1 .26z"
      />
    </svg>
  `,
})
export class IconGdgComponent {}
