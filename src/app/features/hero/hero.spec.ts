import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hero } from './hero';

describe('Hero', () => {
  let component: Hero;
  let fixture: ComponentFixture<Hero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hero],
    }).compileComponents();

    fixture = TestBed.createComponent(Hero);
    component = fixture.componentInstance;

    await fixture.whenStable();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should display the professional title', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain(
      'Full Stack Software Engineer',
    );

    expect(compiled.textContent).toContain(
      'AI/ML Developer',
    );
  });


  it('should calculate experience from 2018', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    const expectedYears =
      new Date().getFullYear() - 2018;

    expect(compiled.textContent).toContain(
      `${expectedYears}+`,
    );
  });


  it('should link to the projects section', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    const projectsLink =
      compiled.querySelector(
        'a[href="#projects"]',
      );

    expect(projectsLink).toBeTruthy();
  });


  it('should link to the contact section', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    const contactLink =
      compiled.querySelector(
        'a[href="#contact"]',
      );

    expect(contactLink).toBeTruthy();
  });
});