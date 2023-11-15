import { Component } from '@angular/core';
import { Components } from "spa-personal-web-components";


@Component({
  selector: 'shell-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent {
  constructor() {
     console.log(window.customElements)
  }
}
