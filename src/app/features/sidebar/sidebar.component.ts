import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements AfterViewInit {
  codingSkills = [
    { language: 'HTML', percent: 90, animate: 0 },
    { language: 'CSS', percent: 80, animate: 0 },
    { language: 'JavaScript', percent: 95, animate: 0 },
    { language: 'TypeScript', percent: 95, animate: 0 },
    { language: 'Python', percent: 75, animate: 0 },
    { language: 'Arduino/C++', percent: 60, animate: 0 },
    { language: 'Angular 2+', percent: 95, animate: 0 },
    { language: 'NodeJS', percent: 85, animate: 0 },
  ];

  tools = ['Git Knowledge', 'ExpressJS', 'AWS', 'Firebase', 'Soft Skills'];

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngAfterViewInit(): void {

    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
        if (entry) {
          const element = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            this.renderer.addClass(element, `show${element.id}`);
          } else {
            this.renderer.removeClass(element, `show${element.id}`);
          }
        }
      });
    });

    const hiddenElements = this.el.nativeElement.querySelectorAll('.hidden');
    hiddenElements.forEach((el: HTMLElement) => observer.observe(el));
  }

}