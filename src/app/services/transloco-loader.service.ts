import { inject, Injectable } from '@angular/core';
import { Translation, TranslocoLoader } from '@jsverse/transloco';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../app.config';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = inject(BASE_URL);

  getTranslation(lang: string) {
    return this.http.get<Translation>(`${this.baseUrl}/i18n/${lang}.json`);
  }
}
