import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  /*
   * Controls whether the navigation menu is open on smaller screens.
   *
   * false = mobile menu is closed
   * true  = mobile menu is open
   */
  protected readonly menuOpen = signal(false);

  /*
   * Opens or closes the mobile navigation menu.
   */
  protected toggleMenu(): void {
    this.menuOpen.update((isOpen) => !isOpen);
  }

  /*
   * Closes the mobile menu after a navigation link is selected.
   *
   * This is mainly useful on phones. Without this, the visitor would
   * click "Projects", scroll to Projects, but the navigation menu
   * would still cover part of the screen.
   */
  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
