import { Component } from '@angular/core';

import { CONTACT_LINKS } from './data/contact-links.data';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly contactLinks = CONTACT_LINKS;
}