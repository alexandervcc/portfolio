import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ProjectComponent } from './pages/projects/project.component';
import { SharedModule } from './shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRouterModule } from './app-router.module';
import { SingleProjectComponent } from './pages/single-project/single-project.component';
import { HomeModule } from './pages/home/home.module';
import { RouterLoadingBarComponent } from './shared/components/router-loading-bar/router-loading-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProjectComponent,
    RouterLoadingBarComponent,
    SingleProjectComponent,
  ],
  imports: [
    HomeModule,
    SharedModule,
    BrowserAnimationsModule,
    AppRouterModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
