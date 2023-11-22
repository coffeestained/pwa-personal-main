import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { range, concatMap, of, delay } from 'rxjs';
import { rightInOut } from 'src/app/animations/flyInOut';

@Component({
  selector: 'shell-get-connected',
  templateUrl: './get-connected.component.html',
  styleUrls: ['./get-connected.component.scss'],
  animations: [
    rightInOut
],
})
export class GetConnectedComponent implements OnInit {

  public show = 0;

  ngOnInit(): void {
    this.show += 1;
    range(1, 2).pipe(
      concatMap((i) => of(i).pipe(delay(250)))
    ).subscribe((_) => { this.show += 1; });
  }

  public email = () => {
    document.location.href = 'mailto:tilliestudios@gmail.com';
  }
}
