import { Component, OnInit } from '@angular/core';
import { OnDemandPreloadService } from 'src/app/services/on-demand-preload-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private preloadOnDemandService : OnDemandPreloadService) { }

  ngOnInit() {
  }
  preloadBundle(routePath) {
    this.preloadOnDemandService.startPreload(routePath);
  }
}
