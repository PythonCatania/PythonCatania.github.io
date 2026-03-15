import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactGroupComponent } from './contact-group.component';

describe('ContactGroupComponent', () => {
  let component: ContactGroupComponent;
  let fixture: ComponentFixture<ContactGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactGroupComponent);
    fixture.componentRef.setInput('title', 'Test');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
