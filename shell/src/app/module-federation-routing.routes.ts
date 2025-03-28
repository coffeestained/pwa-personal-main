
import { getManifest, loadRemoteModule } from "@angular-architects/module-federation";
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { Route } from "@angular/router";
import { CustomManifest } from "./models/module-federation.model";
import { routes } from "./internal.routes";
import { PageNotFoundComponent } from "./layout/page-not-found/page-not-found.component";

export declare type SpaRoute = Route & { isNavigation?: string, displayName?: string };
export declare type SpaRoutes = SpaRoute[];

export function buildRoutes(): SpaRoutes {
    const lazyRoutes = Object.entries(getManifest<CustomManifest>())
      .filter(([_, value]: any) => {
          return value.viaRoute === true
      }).map(([key, value]: any) => {
        const route = {
          path: value.routePath,
          isNavigation: value.isNavigation,
          displayName: value.displayName,
        } as any;

        if (value.ngModuleName) {
          const remoteModuleOptions : any = {
            type: 'manifest',
            remoteName: key,
            exposedModule: value.exposedModule,
          };
          let loader = () => loadRemoteModule(
            remoteModuleOptions
          ).then((m: any) => { 
            return m[value.ngModuleName!] 
          });
          route['loadChildren'] = loader;
        } else if (value.elementName) {
          route.component = WebComponentWrapper;
          route.data = {
            remoteEntry: value.remoteEntry,
            remoteName: key,
            exposedModule: value.exposedModule,
            elementName: value.elementName,
          } as WebComponentWrapperOptions;
          Array.isArray(value.children) ? 
            route.children = value.children.map((child: any) => {
              return {
                path: child.routePath,
                isNavigation: child.isNavigation,
                displayName: child.displayName,
                component: WebComponentWrapper,
                data: {
                  remoteEntry: child.remoteEntry,
                  remoteName: key,
                  exposedModule: child.exposedModule,
                  elementName: child.elementName,
                } as WebComponentWrapperOptions
              }
            }) : null;
        }
        return route;
      });

    const notFound = [
      {
        path: '**',
        component: PageNotFoundComponent,
      }
    ];
    console.log(lazyRoutes);
    const combinedRoutes =  [...routes, ...lazyRoutes, ...notFound];
    return combinedRoutes as SpaRoutes;
}
