import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeToggle } from './theme-toggle';
import { ThemeService } from '../../../core/services/theme';

describe('ThemeToggle', () => {
  let component: ThemeToggle;
  let fixture: ComponentFixture<ThemeToggle>;
  let themeService: ThemeService;

  beforeEach(async () => {
    localStorage.clear();

    await TestBed.configureTestingModule({
      imports: [ThemeToggle],
    }).compileComponents();

    themeService =
      TestBed.inject(ThemeService);

    fixture =
      TestBed.createComponent(ThemeToggle);

    component = fixture.componentInstance;

    await fixture.whenStable();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should start in dark mode', () => {
    expect(themeService.theme()).toBe('dark');
  });


  it('should toggle from dark to light when clicked', () => {
    const compiled =
      fixture.nativeElement as HTMLElement;

    const button =
      compiled.querySelector(
        '.theme-toggle',
      ) as HTMLButtonElement;

    expect(themeService.theme()).toBe('dark');

    button.click();

    expect(themeService.theme()).toBe('light');
  });
});