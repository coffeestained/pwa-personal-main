import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { ModuleFederationSharedService } from '../services/module-federation-shared.service';

@Directive({
  selector: '[SharedDomEvent]'
})

export class SharedDomEventDirective implements AfterViewInit {
  @Input() type!: string;

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    console.log(this.el)
    if (this.type) (window.__SharedService__.classes?.Dom.register as any)(this.type, this.el.nativeElement);
  }
}
