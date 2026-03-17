import { ChangeDetectionStrategy, Component, HostListener, input, model } from '@angular/core';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LightboxComponent {
  readonly images = input.required<string[]>();
  readonly baseUrl = input<string>('');
  readonly index = model<number | null>(null);

  protected close(): void {
    this.index.set(null);
  }

  protected prev(): void {
    const current = this.index();
    if (current === null) return;
    this.index.set((current - 1 + this.images().length) % this.images().length);
  }

  protected next(): void {
    const current = this.index();
    if (current === null) return;
    this.index.set((current + 1) % this.images().length);
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (this.index() === null) return;
    if (event.key === 'Escape') this.close();
    if (event.key === 'ArrowLeft') this.prev();
    if (event.key === 'ArrowRight') this.next();
  }
}
