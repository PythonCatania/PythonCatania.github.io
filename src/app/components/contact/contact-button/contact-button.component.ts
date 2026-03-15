import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-contact-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a
      [id]="id()"
      [rel]="rel()"
      target="_blank"
      [href]="href()"
      role="button"
      class="w-40"
      [class]="buttonClass()"
      [attr.aria-label]="ariaLabel()"
    >
      <ng-content />
    </a>
  `,
})
export class ContactButtonComponent {
  id = input.required<string>();
  href = input.required<string>();
  ariaLabel = input.required<string>();
  buttonClass = input<string>('');
  rel = input<string>('noopener');
}
