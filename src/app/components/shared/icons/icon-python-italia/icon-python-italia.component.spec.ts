import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconPythonItaliaComponent } from './icon-python-italia.component';

describe('IconPythonItaliaComponent', () => {
  let component: IconPythonItaliaComponent;
  let fixture: ComponentFixture<IconPythonItaliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconPythonItaliaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconPythonItaliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
