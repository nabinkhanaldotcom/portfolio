import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer } from './footer';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;

    await fixture.whenStable();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should display the current year', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    const currentYear = new Date().getFullYear();

    expect(compiled.textContent).toContain(
      currentYear.toString(),
    );
  });


  it('should display public contact links', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('GitHub');
    expect(compiled.textContent).toContain('LinkedIn');
    expect(compiled.textContent).toContain('Email');
  });


  it('should not display a phone number', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).not.toContain('(206)');
  });
});