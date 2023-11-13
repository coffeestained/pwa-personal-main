
import { getManifest, loadRemoteModule } from "@angular-architects/module-federation";
import { Routes } from "@angular/router";
import { CustomManifest } from "./models/module-federation.model";
import { routes } from "./internal.routes";

export function buildRoutes(): Routes {

    const lazyRoutes = Object.entries(getManifest<CustomManifest>())
    .filter(([key, value]) => {
        return value.viaRoute === true
    }).map(([key, value]) => {
      return {
        path: value.routePath,
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
        redirectTo: '',
      }
    ]

    return [...routes, ...lazyRoutes, ...notFound]
}
