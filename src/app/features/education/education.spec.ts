import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Education } from './education';

describe('Education', () => {
  let component: Education;
  let fixture: ComponentFixture<Education>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Education],
    }).compileComponents();

    fixture = TestBed.createComponent(Education);
    component = fixture.componentInstance;

    await fixture.whenStable();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should display the degree level', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain("Bachelor's");
  });


  it('should display Idaho State University', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain(
      'Idaho State University',
    );
  });


  it('should not display the major', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).not.toContain(
      'Computer Information Systems',
    );
  });
});