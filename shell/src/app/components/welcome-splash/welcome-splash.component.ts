import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'shell-welcome-splash',
  templateUrl: './welcome-splash.component.html',
  styleUrls: ['./welcome-splash.component.scss']
})
export class WelcomeSplashComponent implements OnInit, AfterViewInit {

  @ViewChildren('intersectSlides') intersectSlides!: QueryList<ElementRef>;

  private _intersectObserver!: IntersectionObserver;

  ngOnInit() {
    this._intersectObserver = new IntersectionObserver(this.handleIntersection);
  }

  ngAfterViewInit() {
    const elements = Array.from(this.intersectSlides);
    elements.forEach((element) => this._intersectObserver.observe(element.nativeElement));
  }

  private handleIntersection(entries: any) {
    entries.map((entry: any) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active__rightInOut');
      } else {
        entry.target.classList.remove('active__rightInOut');
      }
    });
  }
}
