import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { buildRoutes } from '../module-federation-routing.routes';

@Injectable({
  providedIn: 'root'
})
export class ModuleFederationService {

  constructor(private router: Router) { }

  init () {
    return new Promise<void>((resolve, reject) => {
      const routes = buildRoutes();
      this.router.resetConfig(routes);
      resolve();
    })
  }

}
