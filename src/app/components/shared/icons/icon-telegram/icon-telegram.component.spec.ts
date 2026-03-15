import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconTelegramComponent } from './icon-telegram.component';

describe('IconTelegramComponent', () => {
  let component: IconTelegramComponent;
  let fixture: ComponentFixture<IconTelegramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconTelegramComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconTelegramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
