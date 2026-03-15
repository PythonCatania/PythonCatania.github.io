import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-meetup",
  templateUrl: "./meetup.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeetupComponent {}
