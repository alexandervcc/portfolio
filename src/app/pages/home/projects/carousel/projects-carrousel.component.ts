import { Component, OnInit } from '@angular/core';
import { CarouselData } from 'src/app/model/CarouselData';
import { DataStorageService } from 'src/app/services/data-storage/data-storage.service';

@Component({
  selector: 'app-projects-carrousel',
  templateUrl: './projects-carrousel.component.html',
  styleUrls: ['./projects-carrousel.component.css'],
})
export class ProjectsCarrouselComponent implements OnInit {
  list: CarouselData[] = [];

  constructor(private dataStorage: DataStorageService) {}

  async ngOnInit(): Promise<void> {
    const data = await this.dataStorage.getAllProjects();
    this.list = data.map((d) => ({
      id: d.id,
      desc: d.description,
      img: d.main_img,
      title: d.name,
    }));
  }
}
