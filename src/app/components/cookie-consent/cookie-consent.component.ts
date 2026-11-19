import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';

export const COOKIE_CONSENT_STORAGE_KEY = 'cookieconsent_status';

function readDismissed(): boolean {
  try {
    return localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY) === 'dismiss';
  } catch {
    // Storage can be unavailable (private mode, blocked site data): show the banner again.
    return false;
  }
}

@Component({
  selector: 'app-cookie-consent',
  imports: [RouterLink, TranslocoModule],
  templateUrl: './cookie-consent.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CookieConsentComponent {
  protected readonly visible = signal(!readDismissed());

  protected dismiss(): void {
    this.visible.set(false);
    try {
      localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, 'dismiss');
    } catch {
      // Dismissal still applies for the current page view.
    }
  }
}
