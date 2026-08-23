import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Experience } from './experience';

describe('Experience', () => {
  let component: Experience;
  let fixture: ComponentFixture<Experience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Experience],
    }).compileComponents();

    fixture = TestBed.createComponent(Experience);
    component = fixture.componentInstance;

    await fixture.whenStable();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should display all work experience entries', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    const experienceCards =
      compiled.querySelectorAll('.experience-card');

    expect(experienceCards.length).toBe(5);
  });


  it('should display the current role', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('SRPMIC');
    expect(compiled.textContent).toContain('Present');
  });


  it('should display the earliest listed role', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Nationwide Insurance');
    expect(compiled.textContent).toContain('January 2018');
  });
});