
import { getManifest, loadRemoteModule } from "@angular-architects/module-federation";
import { Routes } from "@angular/router";
import { CustomManifest } from "./models/module-federation.model";
import { routes } from "./internal.routes";
import { PageNotFoundComponent } from "./layout/page-not-found/page-not-found.component";

export function buildRoutes(): Routes {

    const lazyRoutes = Object.entries(getManifest<CustomManifest>())
    .filter(([key, value]) => {
        return value.viaRoute === true
    }).map(([key, value]) => {
      return {
        path: value.routePath,
        isNavigation: value.isNavigation,
        displayName: value.displayName,
        loadChildren: () => loadRemoteModule({
            type: 'manifest',
            remoteName: key,
            exposedModule: value.exposedModule
        }).then(m => m[value.ngModuleName!])
      }
    });

    const notFound = [
      {
        path: '**',
        component: PageNotFoundComponent,
      }
    ];

    const combinedRoutes =  [...routes, ...lazyRoutes, ...notFound];
    return combinedRoutes;
}
