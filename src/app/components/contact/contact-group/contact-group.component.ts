import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-contact-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex flex-col items-center', '[class]': 'gap()' },
  template: `
    <h3 class="mb-2 text-[0.85rem] tracking-[0.08em] text-(--muted) uppercase">{{ title() }}</h3>
    <ng-content />
  `,
})
export class ContactGroupComponent {
  title = input.required<string>();
  gap = input<string>('gap-2');
}
