import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testomonials',
  standalone: true,
  imports: [NgFor,NgStyle],
  templateUrl: './testomonials.component.html',
  styleUrl: './testomonials.component.scss'
})
export class TestomonialsComponent {
  slides = [
    {
      image: '/public/MountainView.png',
      title: 'Mountain View Villa',
      email: 'email@info.com',
      description: 'Mitra Architecture truly listens to their clients. The final design was everything we imagined and more, blending aesthetics with practicality flawlessly.'
    },
    {
      image: '/public/green-world.png',
      title: 'Greenwood Residences',
      email: 'email@info.com',
      description: 'Working with Mitra Architecture was an absolute pleasure. They transformed our ideas into a functional and beautiful space that exceeded our expectations.'
    },
    {
      image: '/public/urbanloft.png',
      title: 'Urban Loft',
      email: 'email@info.com',
      description: 'The team at Mitra Architecture handled our project with remarkable care and creativity. We are now living in a space that feels both modern and timeless.'
    },
    {
      image: '/public/estate.jpg',
      title: 'Riverbend Estates',
      email: 'email@info.com',
      description: 'Mitra Architecture\'s commitment to quality and customer satisfaction is evident in every detail. They turned our vision into a stunning reality.'
    },
    {
      image: '/public/haven.jpeg',
      title: 'Seaside Haven',
      email: 'email@info.com',
      description: 'Mitra Architecture exceeded our expectations by designing a luxurious, yet functional space. We couldn’t be happier with the outcome.'
    }
  ];
}
