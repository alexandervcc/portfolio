import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterState,
} from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const title = this.getTitle(
          this.router.routerState,
          this.router.routerState.root
        ).join('-');
        gtag('event', 'page_view', {
          page_title: title,
          page_path: event.urlAfterRedirects,
          page_location: document.location.href,
        });
      }
    });
  }

  ngOnInit() {
    // Scripts on <head>
    const head = document.getElementsByTagName('head')[0];

/*     const scriptDownloadGA = document.createElement('script');
    scriptDownloadGA.src = `https://www.googletagmanager.com/gtag/js?id=${environment.ga}`;
    scriptDownloadGA.async = true;

    const scriptConfigureGA = document.createElement('script');
    scriptConfigureGA.innerHTML = `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "${environment.ga}");`;
 */
    const scriptConfigureHotjar = document.createElement('script');
    scriptConfigureHotjar.innerHTML = `<script>(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:3661076,hjsv:6};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');</script>`;

/*     head.insertBefore(scriptDownloadGA, head.firstChild);
    head.insertBefore(scriptConfigureGA, head.firstChild); */
    head.insertBefore(scriptConfigureHotjar, head.firstChild);
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
