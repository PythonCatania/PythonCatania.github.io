import { TestBed } from '@angular/core/testing';
import { PyCataniaComponent } from './py-catania.component';

describe('PyCataniaComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PyCataniaComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(PyCataniaComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render the community heading', async () => {
    const fixture = TestBed.createComponent(PyCataniaComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Python Catania');
  });
});
