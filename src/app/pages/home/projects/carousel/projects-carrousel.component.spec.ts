import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsCarrouselComponent } from './projects-carrousel.component';

describe('ProjectsCarrouselComponent', () => {
  let component: ProjectsCarrouselComponent;
  let fixture: ComponentFixture<ProjectsCarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsCarrouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
