import { Component } from '@angular/core';

import { SiteShell } from './layout/site-shell/site-shell';

@Component({
  selector: 'app-root',
  imports: [SiteShell],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}