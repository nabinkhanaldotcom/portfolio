import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projects } from './projects';

describe('Projects', () => {
  let component: Projects;
  let fixture: ComponentFixture<Projects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projects],
    }).compileComponents();

    fixture = TestBed.createComponent(Projects);
    component = fixture.componentInstance;

    await fixture.whenStable();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should display the voice conversion project', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain(
      'Nepali Voice Conversion',
    );
  });


  it('should render a project card for each project', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    const projectCards =
      compiled.querySelectorAll('app-project-card');

    expect(projectCards.length).toBe(1);
  });
});