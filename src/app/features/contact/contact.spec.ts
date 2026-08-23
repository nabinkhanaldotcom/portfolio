import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contact } from './contact';

describe('Contact', () => {
  let component: Contact;
  let fixture: ComponentFixture<Contact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact],
    }).compileComponents();

    fixture = TestBed.createComponent(Contact);
    component = fixture.componentInstance;

    await fixture.whenStable();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should display all contact methods', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    const cards =
      compiled.querySelectorAll('.contact-card');

    expect(cards.length).toBe(3);
  });


  it('should display the public email address', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain(
      'nabinkhanal027@gmail.com',
    );
  });


  it('should link to LinkedIn', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    const linkedInLink =
      compiled.querySelector(
        'a[href="https://www.linkedin.com/in/nabin-khanal-490877164/"]',
      );

    expect(linkedInLink).toBeTruthy();
  });


  it('should not display a phone number', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).not.toContain(
      '(206)',
    );
  });
});