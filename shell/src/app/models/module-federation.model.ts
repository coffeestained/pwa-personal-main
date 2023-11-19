import { Manifest, RemoteConfig } from "@angular-architects/module-federation";

export type CustomRemoteConfig = RemoteConfig & {
    isActive: boolean;
    exposedModule: string;
    displayName?: string;
    isNavigation?: boolean;
    routePath?: string;
    ngModuleName?: string;
    viaRoute?: boolean;
    withInPage?: boolean;
    componentName?: string;
 };

export type CustomManifest = Manifest<CustomRemoteConfig>;
