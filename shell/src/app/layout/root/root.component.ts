import { Component } from '@angular/core';
import { SpaLogo } from "spa-personal-web-components/dist/custom-elements/spa-logo";
import { SpaTextLogo } from "spa-personal-web-components/dist/custom-elements/spa-text-logo";


@Component({
  selector: 'shell-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent {

  constructor() {
    new SpaLogo();
    new SpaTextLogo();
     console.log(window.customElements,   new SpaLogo())
  }
}
