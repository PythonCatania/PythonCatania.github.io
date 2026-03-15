import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconPsfComponent } from './icon-psf.component';

describe('IconPsfComponent', () => {
  let component: IconPsfComponent;
  let fixture: ComponentFixture<IconPsfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconPsfComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconPsfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
