import { getManifest } from '@angular-architects/module-federation';
import { Component, OnInit } from '@angular/core';
import { buildRoutes } from '../../module-federation-routing.routes';
import { CustomManifest } from '../../models/module-federation.model';

@Component({
  selector: 'shell-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  routes: {
    path: string,
    isNavigation: boolean,
    displayName: string,
    [t: string]: any,
  }[] = [];

  constructor() { }

  ngOnInit(): void {
    const manifest = getManifest<CustomManifest>();
    const combinedRoutes = buildRoutes();
    this.routes = combinedRoutes as {
      path: string,
      isNavigation: boolean,
      displayName: string,
      [t: string]: any,
    }[];
  }
}
