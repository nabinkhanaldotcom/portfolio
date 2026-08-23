import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    localStorage.clear();

    document.documentElement.removeAttribute(
      'data-theme',
    );

    TestBed.configureTestingModule({});

    service = TestBed.inject(ThemeService);
  });


  it('should create', () => {
    expect(service).toBeTruthy();
  });


  it('should start in dark mode when no theme is saved', () => {
    expect(service.theme()).toBe('dark');

    expect(
      document.documentElement.getAttribute(
        'data-theme',
      ),
    ).toBe('dark');
  });


  it('should switch from dark to light mode', () => {
    service.toggleTheme();

    expect(service.theme()).toBe('light');

    expect(
      document.documentElement.getAttribute(
        'data-theme',
      ),
    ).toBe('light');
  });


  it('should remember light mode', () => {
    service.setTheme('light');

    expect(
      localStorage.getItem('portfolio-theme'),
    ).toBe('light');
  });


  it('should remember dark mode', () => {
    service.setTheme('dark');

    expect(
      localStorage.getItem('portfolio-theme'),
    ).toBe('dark');
  });
});