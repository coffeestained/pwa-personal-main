import { getManifest } from '@angular-architects/module-federation';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { SpaRoutes, buildRoutes } from '../../module-federation-routing.routes';
import { CustomManifest } from '../../models/module-federation.model';

@Component({
  selector: 'shell-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public routes?: SpaRoutes;

  public isMobileToggled = false;
  public isMobile = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
  ) { }

  ngOnInit(): void {
    const manifest = getManifest<CustomManifest>();
    const combinedRoutes = buildRoutes();
    this.routes = combinedRoutes.filter((route) => route.isNavigation);

    // Register observers
    this.registerObservers();
  }

  registerObservers(): void {
    // Detect Breakboints
    this.breakpointObserver.observe([
      "(max-width: 768px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
        this.isMobileToggled = false;
      }
    });
  }

  public returnWidth() : { width: '25%' } {
    return { width: '25%' };
  }
}
