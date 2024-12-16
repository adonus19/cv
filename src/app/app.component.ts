import { Component } from '@angular/core';
import { SidebarComponent } from './features/sidebar/sidebar.component';
import { HeroComponent } from './features/hero/hero.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { ProjectsComponent } from './features/projects/projects.component';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent, HeroComponent, ExperienceComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'simple-cv';
}
