import { Injectable } from '@angular/core';
import { SharedService } from 'pwa-personal-shared-service';
import { Observables } from 'pwa-personal-shared-service/dist/observable/observable';
import { Workers } from 'pwa-personal-shared-service/dist/worker/worker';
import { Dom } from 'pwa-personal-shared-service/dist/dom/dom';

@Injectable({
  providedIn: 'root'
})
export class ModuleFederationSharedService {

  registerObservable?: Observables['generateObservable'];
  destroyObservable?: Observables['destroyObservable'];
  generateServiceWorker?: Workers['generateServiceWorker'];
  generateWebWorker?: Workers['generateWebWorker'];
  terminateServiceWorker?: Workers['terminateServiceWorker'];
  terminateWebWorker?: Workers['terminateWebWorker'];
  registerDomEvent?: Dom['register'];
  destroyDomEvent?: Dom['destroy'];

  constructor() {
    new SharedService(window);

    if (window.__SharedService__) {
      this.registerObservable = window.__SharedService__.classes?.Observables.generateObservable;
      this.destroyObservable = window.__SharedService__.classes?.Observables.destroyObservable;
      this.generateServiceWorker = window.__SharedService__.classes?.Workers.generateServiceWorker;
      this.generateWebWorker = window.__SharedService__.classes?.Workers.generateWebWorker;
      this.terminateServiceWorker = window.__SharedService__.classes?.Workers.terminateServiceWorker;
      this.terminateWebWorker = window.__SharedService__.classes?.Workers.terminateWebWorker;
      this.registerDomEvent = window.__SharedService__.classes?.Dom.register;
      this.destroyDomEvent = window.__SharedService__.classes?.Dom.destroy;

      // Init
      this.init();
    }
  }

  private init() {
    const serviceWorker = (this.generateServiceWorker as any)('service-worker', '../../assets/service-worker/service-worker.js')
    console.log("DEBUG: Service Worker Init", serviceWorker);
  }
}
