import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconGdgComponent } from './icon-gdg.component';

describe('IconGdgComponent', () => {
  let component: IconGdgComponent;
  let fixture: ComponentFixture<IconGdgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconGdgComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconGdgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
