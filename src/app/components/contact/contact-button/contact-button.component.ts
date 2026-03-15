import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

const VARIANT_CLASSES = {
  primary:
    'border-(--color-primary) bg-(--color-primary) text-white hover:border-(--color-primary-hover) hover:bg-(--color-primary-hover) hover:text-white',
  secondary:
    'border-secondary bg-secondary text-white hover:border-secondary-hover hover:bg-secondary-hover hover:text-white',
  telegram: 'border-[#2aabee] bg-[#2aabee] text-white hover:border-[#1d96d4] hover:bg-[#1d96d4] hover:text-white',
  'primary-outline':
    'border-[#f50000] bg-transparent text-[#f50000] hover:border-[#f50000] hover:bg-[#f50000]/10 hover:text-[#f50000]',
  'white-outline': 'border-white bg-transparent text-white hover:border-white hover:bg-white/10',
} as const;

type ButtonVariant = keyof typeof VARIANT_CLASSES;

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
      class="inline-flex w-40 cursor-pointer items-center justify-center gap-2 rounded-(--radius) border-2 px-4 py-2 text-base font-semibold no-underline transition-colors [&_svg]:shrink-0"
      [class]="variantClass()"
      [attr.aria-label]="ariaLabel()"
    >
      <ng-content />
    </a>
  `,
})
export class ContactButtonComponent {
  readonly id = input.required<string>();
  readonly href = input.required<string>();
  readonly ariaLabel = input.required<string>();
  readonly variant = input<ButtonVariant>('primary');
  readonly rel = input<string>('noopener');

  protected readonly variantClass = computed(() => VARIANT_CLASSES[this.variant()]);
}
