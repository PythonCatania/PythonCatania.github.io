import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactButtonComponent } from './contact-button.component';

describe('ContactButtonComponent', () => {
  let component: ContactButtonComponent;
  let fixture: ComponentFixture<ContactButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactButtonComponent);
    fixture.componentRef.setInput('id', 'test');
    fixture.componentRef.setInput('href', 'https://example.com');
    fixture.componentRef.setInput('ariaLabel', 'Test');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
