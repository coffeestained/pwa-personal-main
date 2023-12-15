import { Component } from '@angular/core';

@Component({
  selector: 'shell-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {

  private _quotes = [
    {
      author: "Neil deGrasse Tyson",
      message: "The Universe is under no obligation to make sense to you."
    },
    {
      author: "Carl Sagan",
      message: "The moon is a friend for the lonesome to talk to.",
    },
    {
      author: "Konstantin Tsiolkovsky",
      message: "The Earth is the cradle of humanity, but mankind cannot stay in the cradle forever.",
    },
    {
      author: "Zhuangzi",
      message: "For the wise man looks into space and he knows there is no limited dimensions.",
    },
    {
      author: "Lord Byron",
      message: "Ye stars! which are the poetry of heaven!",
    },
    {
      author: "Vikram Sarabhai",
      message: "He who can listen to the music in the midst of noise can achieve great things.",
    },
    {
      author: "Xi Jinping",
      message: "The sky is vast. Exploration never ends.",
    },
    {
      author: "John F Kennedy",
      message: "We choose to go to the Moon."
    }
  ]
  public quote!: { author: string, message: string };

  constructor() {
    this.quote = this._quotes[Math.floor(Math.random() * this._quotes.length)];
  }
}
