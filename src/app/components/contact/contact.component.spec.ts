import { TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render all contact groups', async () => {
    const fixture = TestBed.createComponent(ContactComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const groups = compiled.querySelectorAll('.contact-group');
    expect(groups.length).toBe(6);
  });
});
