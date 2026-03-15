import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconPyconItaliaComponent } from './icon-pycon-italia.component';

describe('IconPyconItaliaComponent', () => {
  let component: IconPyconItaliaComponent;
  let fixture: ComponentFixture<IconPyconItaliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconPyconItaliaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconPyconItaliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
