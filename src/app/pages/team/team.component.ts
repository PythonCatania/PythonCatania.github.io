import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

interface TeamMember {
  readonly name: string;
  readonly github?: string;
}

@Component({
  selector: 'app-team',
  imports: [TranslocoModule],
  templateUrl: './team.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamComponent {
  protected readonly members: readonly TeamMember[] = [
    { name: 'Salvatore Rapisarda', github: 'https://github.com/salvo-rapisarda' },
    { name: 'Matteo Jacopo Schembri', github: 'https://github.com/mjschembri' },
    { name: 'Stefano Borzi' },
    { name: 'Claudio Faro' },
  ];
}
