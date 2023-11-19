import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'shell-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  private interval = interval(900);
  private currentTime = new Date();

  constructor() {}

  ngOnInit() {
    this.interval.subscribe(() => this.update());
  }


  public get time() : Date {
    return this.currentTime;
  }


  public update() {
    this.currentTime = new Date();
  }

}
