import { Component, OnInit } from '@angular/core';
import { concatMap, delay, of, range } from 'rxjs';

@Component({
  selector: 'shell-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit {

  show = 0;

  ngOnInit() {
    this.show += 1;
    range(1, 16).pipe(
      concatMap((i) => of(i).pipe(delay(50)))
    ).subscribe((_) => { this.show += 1; });
  }
}
