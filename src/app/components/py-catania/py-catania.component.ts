import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-py-catania',
  imports: [NgOptimizedImage],
  templateUrl: './py-catania.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PyCataniaComponent {}
