import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-call-for-speakers',
  imports: [TranslocoModule],
  templateUrl: './call-for-speakers.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CallForSpeakersComponent {}
