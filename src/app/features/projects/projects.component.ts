import { Component, ElementRef, Renderer2, signal } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = signal([
    {
      icon: 'fas fa-code',
      title: 'Sup Chat',
      description: 'A simple chat app utilizing Ionic with Angular and Firebase as the backend, including user authentication. For iOS and Android.',
      url: 'https://github.com/adonus19/sup-chat'
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'Sudoku Solver',
      description: 'A Sudoku game solver. Input the starting numbers and this program will solve the puzzle for you.',
      url: 'https://github.com/adonus19/sudoku-solver'
    },
    {
      icon: 'fas fa-database',
      title: 'Relevant Mobile',
      description: 'A custom mobile application for Relevant Church, complete with native video streaming, email, and custom push notifications all from the app. For iOS and Android.',
      url: 'https://github.com/adonus19/relevant-app'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Dicee',
      description: 'A forked mobile game application that uses Flutter for iOS and Android.',
      url: 'https://github.com/adonus19/dicee'
    },
    {
      icon: 'fas fa-code',
      title: 'Firebase Temperature',
      description: 'An Arduino project that monitors temperature and humidity and sends updates to Firebase. Also displays temperature and humidity on a LCD.',
      url: 'https://github.com/adonus19/Firebase-temperature'
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'Local Web Server',
      description: 'An Arduino project that serves a web page locally displaying temperature and humidity. User can control a network attached stepper motor.',
      url: 'https://github.com/adonus19/Server-temp-hum'
    },
  ]);

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngAfterViewInit(): void {
    let delay = (this.projects.length - 1) * 100;
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
        if (entry) {
          const element = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            this.renderer.addClass(element, `show`);
          } else {
            this.renderer.removeClass(element, `show`);
          }
        }
      });
    });

    const hiddenElements = this.el.nativeElement.querySelectorAll('.hidden');
    hiddenElements.forEach((el: HTMLElement) => {
      this.renderer.setStyle(el, 'transition-delay', `${delay}ms`);
      observer.observe(el);
      delay -= 100;
    });
  }
}
