import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { ContactButtonComponent } from './contact-button/contact-button.component';
import { ContactGroupComponent } from './contact-group/contact-group.component';
import { IconFacebookComponent } from '../shared/icons/icon-facebook/icon-facebook.component';
import { IconGithubComponent } from '../shared/icons/icon-github/icon-github.component';
import { IconInstagramComponent } from '../shared/icons/icon-instagram/icon-instagram.component';
import { IconLinkedinComponent } from '../shared/icons/icon-linkedin/icon-linkedin.component';
import { IconMastodonComponent } from '../shared/icons/icon-mastodon/icon-mastodon.component';
import { IconTelegramComponent } from '../shared/icons/icon-telegram/icon-telegram.component';
import { IconYoutubeComponent } from '../shared/icons/icon-youtube/icon-youtube.component';

@Component({
  selector: 'app-contact',
  imports: [
    TranslocoModule,
    ContactButtonComponent,
    ContactGroupComponent,
    IconFacebookComponent,
    IconGithubComponent,
    IconInstagramComponent,
    IconLinkedinComponent,
    IconMastodonComponent,
    IconTelegramComponent,
    IconYoutubeComponent,
  ],
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {}
