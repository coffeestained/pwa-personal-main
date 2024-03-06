import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';

@Directive({
  selector: '[SharedDomEvent]'
})

export class SharedDomEventDirective implements AfterViewInit, OnDestroy {
  @Input() type!: string;

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    if (this.type) (window.__SharedService__.classes?.Dom.register as any)(this.type, this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.type) (window.__SharedService__.classes?.Dom.destroy as any)(this.type, this.el.nativeElement);
  }
}
