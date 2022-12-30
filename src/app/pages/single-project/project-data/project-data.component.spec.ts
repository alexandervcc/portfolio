import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDataComponent } from './project-data.component';

describe('ProjectDataComponent', () => {
  let component: ProjectDataComponent;
  let fixture: ComponentFixture<ProjectDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
