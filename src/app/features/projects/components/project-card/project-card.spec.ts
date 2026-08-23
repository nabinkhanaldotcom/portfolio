import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCard } from './project-card';

describe('ProjectCard', () => {
  let component: ProjectCard;
  let fixture: ComponentFixture<ProjectCard>;

  const testProject = {
    title: 'Test Project',
    description: 'A test project description.',
    technologies: ['Angular', 'FastAPI'],
    projectUrl: '/test',
    githubUrl: 'https://github.com/example/test',
    status: 'Live' as const,
    featured: true,
  };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectCard);

    fixture.componentRef.setInput(
      'project',
      testProject,
    );

    component = fixture.componentInstance;

    await fixture.whenStable();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should display the project title', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain(
      'Test Project',
    );
  });


  it('should display project technologies', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Angular');
    expect(compiled.textContent).toContain('FastAPI');
  });


  it('should link to the project', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    const projectLink =
      compiled.querySelector('.primary-link') as HTMLAnchorElement;

    expect(projectLink.getAttribute('href')).toBe('/test');
  });
});