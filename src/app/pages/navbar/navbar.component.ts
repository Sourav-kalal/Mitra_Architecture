import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { AppComponent } from '../../app.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @ViewChild('navBar') navElement !: ElementRef;
  activeLink: string = 'home';
  constructor(private appComponent: AppComponent) {
  }
  navigate(templateName: any): void {
    this.appComponent.scrollToService(templateName);
    this.activeLink = templateName;
    this.navElement.nativeElement.classList.add('hidden');
  }
  lastScrollPosition = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > this.lastScrollPosition) {
      // Scrolling down, hide the navbar
      this.navElement.nativeElement.classList.add('hidden');
      this.navElement.nativeElement.classList.remove('visible');
    } else {
      // Scrolling up, show the navbar
      this.navElement.nativeElement.classList.add('visible');
      this.navElement.nativeElement.classList.remove('hidden');
    }

    this.lastScrollPosition = currentScrollPosition;
  }
}
