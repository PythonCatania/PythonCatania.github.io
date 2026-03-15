import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconMastodonComponent } from './icon-mastodon.component';

describe('IconMastodonComponent', () => {
  let component: IconMastodonComponent;
  let fixture: ComponentFixture<IconMastodonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconMastodonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconMastodonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
