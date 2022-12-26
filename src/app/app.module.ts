import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ProjectComponent } from './pages/projects/project.component';
import { HomeModule } from './pages/home/home.module';
import { SharedModule } from './shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule } from '@angular/material/grid-list';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AppRouterModule } from './app-router.module';
import { SingleProjectComponent } from './pages/single-project/single-project.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProjectComponent,
    SingleProjectComponent,
    NotFoundComponent,
  ],
  imports: [
    HomeModule,
    SharedModule,
    BrowserAnimationsModule,
    MatGridListModule,
    AppRouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
