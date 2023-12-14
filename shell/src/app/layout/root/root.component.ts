import { Component } from '@angular/core';
import { SpaLogo } from "spa-personal-web-components/dist/custom-elements/spa-logo";
import { SpaTextLogo } from "spa-personal-web-components/dist/custom-elements/spa-text-logo";
import { SpaTooltip } from "spa-personal-web-components/dist/custom-elements/spa-tooltip";
import { SpaButton } from "spa-personal-web-components/dist/custom-elements/spa-button";
import { ModuleFederationSharedService } from 'src/app/services/module-federation-shared.service';

@Component({
  selector: 'shell-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent {

  constructor(private moduleFederationSharedService: ModuleFederationSharedService) {
    // Web Components Loaded
    new SpaLogo();
    new SpaTextLogo();
    new SpaTooltip();
    new SpaButton();
    // Web Components Loaded
  }
}
