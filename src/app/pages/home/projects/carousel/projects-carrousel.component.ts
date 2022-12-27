import { Component, Input } from '@angular/core';
import { CarouselData } from 'src/app/model/CarouselData';

@Component({
  selector: 'app-projects-carrousel',
  templateUrl: './projects-carrousel.component.html',
  styleUrls: ['./projects-carrousel.component.css'],
})
export class ProjectsCarrouselComponent {
  @Input('projects') list: CarouselData[] = [
    {
      id: '1',
      desc: 'mijotron',
      title: 'xd',
      img: 'https://images.freeimages.com/images/large-previews/3b2/prague-conference-center-1056491.jpg',
    },
    {
      id: '2',
      desc: 'manaseses',
      title: 'xd 2',
      img: 'https://images.freeimages.com/images/large-previews/218/my-dog-cutter-1499799.jpg',
    },
    {
      id: '3',
      desc: 'babitas',
      title: 'xd 3',
      img: 'https://images.freeimages.com/images/large-previews/7d4/metro-escalator-in-prague-1638671.jpg',
    },
    {
      id: '1',
      desc: 'mijotron',
      title: 'xd',
      img: 'https://images.freeimages.com/images/large-previews/3b2/prague-conference-center-1056491.jpg',
    }
  ];
}
