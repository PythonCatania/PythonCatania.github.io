import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconYoutubeComponent } from './icon-youtube.component';

describe('IconYoutubeComponent', () => {
  let component: IconYoutubeComponent;
  let fixture: ComponentFixture<IconYoutubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconYoutubeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
