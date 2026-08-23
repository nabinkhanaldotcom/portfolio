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


  it('should start in light mode when no theme is saved', () => {
    expect(service.theme()).toBe('light');

    expect(
      document.documentElement.getAttribute(
        'data-theme',
      ),
    ).toBe('light');
  });


  it('should switch to dark mode', () => {
    service.toggleTheme();

    expect(service.theme()).toBe('dark');

    expect(
      document.documentElement.getAttribute(
        'data-theme',
      ),
    ).toBe('dark');
  });


  it('should remember the selected theme', () => {
    service.setTheme('dark');

    expect(
      localStorage.getItem('portfolio-theme'),
    ).toBe('dark');
  });
});