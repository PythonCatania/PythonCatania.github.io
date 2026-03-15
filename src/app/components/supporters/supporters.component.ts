import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { ContactButtonComponent } from '../contact/contact-button/contact-button.component';
import { IconGdgComponent } from '../shared/icons/icon-gdg/icon-gdg.component';
import { IconPsfComponent } from '../shared/icons/icon-psf/icon-psf.component';
import { IconPyconItaliaComponent } from '../shared/icons/icon-pycon-italia/icon-pycon-italia.component';
import { IconPythonItaliaComponent } from '../shared/icons/icon-python-italia/icon-python-italia.component';

@Component({
  selector: 'app-supporters',
  imports: [
    TranslocoModule,
    ContactButtonComponent,
    IconGdgComponent,
    IconPsfComponent,
    IconPyconItaliaComponent,
    IconPythonItaliaComponent,
  ],
  templateUrl: './supporters.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupportersComponent {}
