import { Component, OnInit } from '@angular/core';
import { OnDemandPreloadService } from 'src/app/services/on-demand-preload-service.service';
import { SwUpdate } from '@angular/service-worker';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  routerArray = [
    {
      name: 'Login',
      routerLink: '/auth'
    },
    {
      name: 'Register',
      routerLink: '/auth/register'
    },
    {
      name: 'Dashboard',
      routerLink: '/dashboard'
    },
  ];

  constructor(
    private swUpdate: SwUpdate,
    private preloadOnDemandService: OnDemandPreloadService) { }

  ngOnInit() {
    this.onReloadCache();
  }

  onReloadCache() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm('New version available! would you like to update?')) {
          window.location.reload();
        }
      });
    }
  }

  preloadBundle(routePath) {
    this.preloadOnDemandService.startPreload(routePath);
  }
}
