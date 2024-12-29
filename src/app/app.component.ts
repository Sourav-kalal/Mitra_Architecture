import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ServicesComponent } from './pages/services/services.component';
import { TestomonialsComponent } from './pages/testomonials/testomonials.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FooterComponent } from './pages/footer/footer.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterOutlet,  
    HomePageComponent,
    ServicesComponent,
    TestomonialsComponent,
    ContactUsComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  serviceTitle = 'SERVICES';
  serviceCardDetails = [
    {
      title: 'Architectural',
      imageUrl: '/architectural.png',
      description: 'We design modern and sustainable buildings that meet your needs.'
    },
    {
      title: 'Structural',
      imageUrl: '/structeral.png',
      description: 'Our structural solutions ensure safety and stability in every project.'
    },
    {
      title: 'Interior',
      imageUrl: '/interior.jpeg',
      description: 'Create beautiful and functional spaces with our interior design services.'
    },
    {
      title: 'Landscaping',
      imageUrl: '/landscaping.jpeg',
      description: 'Transform your outdoor spaces with our expert landscaping services.'
    },
    {
      title: 'Construction',
      imageUrl: '/construction.jpeg',
      description: 'We provide comprehensive construction services from start to finish.'
    }
  ];
  title = 'PROJECT PORTPOLIO';
  cardDetails = [
    {
      title: 'Modern Apartment',
      imageUrl: '/modern-apartment.png',
      description: 'A stunning apartment designed for modern living.'
    },
    {
      title: 'Luxury Villa',
      imageUrl: '/luxury-villia.png',
      description: 'An elegant villa with luxurious amenities.'
    },
    {
      title: 'Office Complex',
      imageUrl: '/office-complex.png',
      description: 'State-of-the-art office spaces for businesses.'
    }
  ];
  @ViewChild('home', { static: false }) homeSection!: ElementRef;
  @ViewChild('services', { static: false }) servicesSection!: ElementRef;
  @ViewChild('testomonials', { static: false }) testomonialsSection!: ElementRef;
  @ViewChild('projects', { static: false }) projectsSection!: ElementRef;
  @ViewChild('contact', { static: false }) contactSection!: ElementRef;

  scrollToService(templateName: any): void {
    switch(templateName) {
      case 'home':
        this.homeSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'services':
        this.servicesSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'testomonials':
        this.testomonialsSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'projects':
        this.projectsSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        this.contactSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
    }
  }
}
