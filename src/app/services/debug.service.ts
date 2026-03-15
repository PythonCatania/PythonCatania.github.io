import { inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class DebugService {
  private readonly document = inject(DOCUMENT);

  readonly isEnabled: boolean =
    new URLSearchParams(this.document.defaultView?.location.search ?? '').get('debug') === 'true';
}
