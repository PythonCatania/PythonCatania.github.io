import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactButtonComponent } from './contact-button/contact-button.component';
import { ContactGroupComponent } from './contact-group/contact-group.component';
import { IconFacebookComponent } from '../shared/icons/icon-facebook/icon-facebook.component';
import { IconGdgComponent } from '../shared/icons/icon-gdg/icon-gdg.component';
import { IconGithubComponent } from '../shared/icons/icon-github/icon-github.component';
import { IconInstagramComponent } from '../shared/icons/icon-instagram/icon-instagram.component';
import { IconLinkedinComponent } from '../shared/icons/icon-linkedin/icon-linkedin.component';
import { IconMastodonComponent } from '../shared/icons/icon-mastodon/icon-mastodon.component';
import { IconPsfComponent } from '../shared/icons/icon-psf/icon-psf.component';
import { IconPyconItaliaComponent } from '../shared/icons/icon-pycon-italia/icon-pycon-italia.component';
import { IconPythonItaliaComponent } from '../shared/icons/icon-python-italia/icon-python-italia.component';
import { IconTelegramComponent } from '../shared/icons/icon-telegram/icon-telegram.component';
import { IconYoutubeComponent } from '../shared/icons/icon-youtube/icon-youtube.component';

@Component({
  selector: 'app-contact',
  imports: [
    ContactButtonComponent,
    ContactGroupComponent,
    IconFacebookComponent,
    IconGdgComponent,
    IconGithubComponent,
    IconInstagramComponent,
    IconLinkedinComponent,
    IconMastodonComponent,
    IconPsfComponent,
    IconPyconItaliaComponent,
    IconPythonItaliaComponent,
    IconTelegramComponent,
    IconYoutubeComponent,
  ],
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {}
