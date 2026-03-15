import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconGithubComponent } from './icon-github.component';

describe('IconGithubComponent', () => {
  let component: IconGithubComponent;
  let fixture: ComponentFixture<IconGithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconGithubComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
