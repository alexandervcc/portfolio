import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SharedModule } from './shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRouterModule } from './app-router.module';
import { SingleProjectComponent } from './pages/single-project/single-project.component';
import { HomeModule } from './pages/home/home.module';
import { ProjectsModule } from './pages/projects/projects.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SingleProjectComponent,
  ],
  imports: [
    HomeModule,
    SharedModule,
    BrowserAnimationsModule,
    AppRouterModule,
    HttpClientModule,
    ProjectsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
