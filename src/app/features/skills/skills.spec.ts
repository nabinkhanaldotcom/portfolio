import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Skills } from './skills';

describe('Skills', () => {
  let component: Skills;
  let fixture: ComponentFixture<Skills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Skills],
    }).compileComponents();

    fixture = TestBed.createComponent(Skills);
    component = fixture.componentInstance;

    await fixture.whenStable();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should display all skill categories', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    const categories =
      compiled.querySelectorAll('.skill-category');

    expect(categories.length).toBe(7);
  });


  it('should display core Java and frontend skills', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Java');
    expect(compiled.textContent).toContain('Spring Boot');
    expect(compiled.textContent).toContain('Angular');
    expect(compiled.textContent).toContain('TypeScript');
  });


  it('should display Python and AI skills', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Python');
    expect(compiled.textContent).toContain('FastAPI');
    expect(compiled.textContent).toContain('Whisper');
    expect(compiled.textContent).toContain('RVC');
  });


  it('should display security as a skill category', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Security');
    expect(compiled.textContent).toContain('Spring Security');
    expect(compiled.textContent).toContain('JWT Authentication');
  });
});