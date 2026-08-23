import { Component } from '@angular/core';

import { Header } from '../header/header';
import { Footer } from '../footer/footer';

import { About } from '../../features/about/about';
import { Experience } from '../../features/experience/experience';
import { Education } from '../../features/education/education';
import { Skills } from '../../features/skills/skills';
import { Projects } from '../../features/projects/projects';
import { Contact } from '../../features/contact/contact';

@Component({
  selector: 'app-site-shell',
  imports: [
    Header,
    About,
    Experience,
    Education,
    Skills,
    Projects,
    Contact,
    Footer,
  ],
  templateUrl: './site-shell.html',
  styleUrl: './site-shell.scss',
})
export class SiteShell {}