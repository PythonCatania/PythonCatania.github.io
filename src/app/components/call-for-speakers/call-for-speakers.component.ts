import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-call-for-speakers',
  imports: [NgOptimizedImage, TranslocoModule],
  templateUrl: './call-for-speakers.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CallForSpeakersComponent {}
