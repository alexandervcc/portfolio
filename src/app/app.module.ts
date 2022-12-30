import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRouterModule } from './app-router.module';
import { HomeModule } from './pages/home/home.module';
import { ProjectsModule } from './pages/projects/projects.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SingleProjectModule } from './pages/single-project/single-project.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    HomeModule,
    SharedModule,
    AppRouterModule,
    HttpClientModule,
    ProjectsModule,
    SingleProjectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
