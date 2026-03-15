import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-py-catania',
  imports: [NgOptimizedImage, TranslocoModule],
  templateUrl: './py-catania.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PyCataniaComponent {}
