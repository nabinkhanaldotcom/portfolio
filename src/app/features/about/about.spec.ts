import { ComponentFixture, TestBed } from '@angular/core/testing';

import { About } from './about';

describe('About', () => {
  let component: About;
  let fixture: ComponentFixture<About>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [About],
    }).compileComponents();

    fixture = TestBed.createComponent(About);
    component = fixture.componentInstance;

    await fixture.whenStable();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should display the experience years based on 2018', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    const expectedYears = new Date().getFullYear() - 2018;

    expect(compiled.textContent).toContain(
      `${expectedYears}+ years of experience`,
    );
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
});