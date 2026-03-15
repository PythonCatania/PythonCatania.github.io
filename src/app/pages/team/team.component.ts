import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { IconGithubComponent } from '../../components/shared/icons/icon-github/icon-github.component';
import { IconLinkedinComponent } from '../../components/shared/icons/icon-linkedin/icon-linkedin.component';

interface TeamMember {
  readonly name: string;
  readonly image: string;
  readonly github?: string;
  readonly linkedin?: string;
}

@Component({
  selector: 'app-team',
  imports: [TranslocoModule, NgOptimizedImage, IconGithubComponent, IconLinkedinComponent],
  templateUrl: './team.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamComponent {
  protected readonly members: readonly TeamMember[] = [
    {
      name: 'Salvatore Rapisarda',
      image: '/images/about/SalvoRapisarda.jpeg',
      github: 'https://github.com/salvorapi',
      linkedin: 'https://www.linkedin.com/in/salvorapi/',
    },
    {
      name: 'Matteo Jacopo Schembri',
      image: '/images/about/MatteoJacopoSchembri.jpeg',
      github: 'https://github.com/teosche',
      linkedin: 'https://www.linkedin.com/in/teosche/',
    },
    {
      name: 'Stefano Borzi',
      image: '/images/about/StefanoBorzi.jpeg',
      github: 'https://github.com/Helias',
      linkedin: 'https://www.linkedin.com/in/stefanoborzi/',
    },
    {
      name: 'Claudio Faro',
      image: '/images/about/ClaudioFaro.jpeg',
      github: 'https://github.com/kaesarct',
      linkedin: 'https://www.linkedin.com/in/claudio-faro-70128649/',
    },
  ];
}
