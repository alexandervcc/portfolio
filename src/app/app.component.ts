import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterState } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const title = this.getTitle(this.router.routerState, this.router.routerState.root).join('-');
        gtag('event', 'page_view', {
          page_title: title,
          page_path: event.urlAfterRedirects,
          page_location: document.location.href
        });
      }
    })
  }

  ngOnInit() {
    const head = document.getElementsByTagName('head')[0]

    const scriptDownloadGA = document.createElement('script');
    scriptDownloadGA.src = `https://www.googletagmanager.com/gtag/js?id=${environment.ga}`;
    scriptDownloadGA.async = true;

    const scriptConfigureGA = document.createElement('script');
    scriptConfigureGA.innerHTML = `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "${environment.ga}");`;

    head.insertBefore(scriptDownloadGA, head.firstChild);
    head.insertBefore(scriptConfigureGA, head.firstChild);
  }


  private getTitle(state: RouterState, parent: ActivatedRoute): string[] {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data['title']) {
      data.push(parent.snapshot.data['title']);
    }
    if (state && parent && parent.firstChild) {
      data.push(...this.getTitle(state, parent.firstChild));
    }
    return data;
  }
}
