import { Component } from '@angular/core';

import { ModuleFederationSharedService } from 'src/app/services/module-federation-shared.service';

@Component({
  selector: 'shell-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent {
  constructor(private moduleFederationSharedService: ModuleFederationSharedService) {}
}
