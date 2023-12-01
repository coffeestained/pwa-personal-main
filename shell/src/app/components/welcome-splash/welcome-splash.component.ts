import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'shell-welcome-splash',
  templateUrl: './welcome-splash.component.html',
  styleUrls: ['./welcome-splash.component.scss']
})
export class WelcomeSplashComponent implements OnInit, AfterViewInit {

  @ViewChildren('intersectSlideRight') intersectSlideRight!: QueryList<ElementRef>;
  private _intersectSlideRightObserver!: IntersectionObserver;

  @ViewChildren('intersectSlideDown') intersectSlideDown!: QueryList<ElementRef>;
  private _intersectSlideDownObserver!: IntersectionObserver;

  ngOnInit() {
    this._intersectSlideRightObserver = new IntersectionObserver(this.handleSlideRightIntersection);
    this._intersectSlideDownObserver = new IntersectionObserver(this.handleSlideDownIntersection);
  }

  ngAfterViewInit() {
    const rightSlideElements = Array.from(this.intersectSlideRight);
    rightSlideElements.forEach((element) => this._intersectSlideRightObserver.observe(element.nativeElement));

    const downSlideElements = Array.from(this.intersectSlideDown);
    downSlideElements.forEach((element) => this._intersectSlideDownObserver.observe(element.nativeElement));
  }

  private handleSlideRightIntersection(entries: any) {
    entries.map((entry: any) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active__rightInOut');
      } else {
        entry.target.classList.remove('active__rightInOut');
      }
    });
  }

  private handleSlideDownIntersection(entries: any) {
    entries.map((entry: any) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active__downInOut');
      } else {
        entry.target.classList.remove('active__downInOut');
      }
    });
  }
}
