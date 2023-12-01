import { Injectable, WritableSignal, effect, signal } from '@angular/core';
import { LocalStorageService } from './local-storage-library.service';

export type AvailableThemes =
| 'Light'
| 'Dark';

export interface ThemeConfiguration {
  "--theme-text-neutral": string,
  "--theme-text-color": string,
  "--theme-text-color-two": string,
  "--theme-background-color": string,
  "--theme-background-color-two": string,
  "--theme-gradient": string,
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private currentTheme: WritableSignal<AvailableThemes> = signal("Light");
  private readonly themes: Record<AvailableThemes, ThemeConfiguration> = {
    Light: {
      "--theme-text-neutral": "#505050",
      "--theme-text-color": "#6167af",
      "--theme-text-color-two": "#1fe995",
      "--theme-background-color": "rgb(255, 255, 255)",
      "--theme-background-color-two": "rgb(249, 249, 249)",
      "--theme-gradient": "linear-gradient(72deg, #6167af 0%, rgba(153,153,233,1) 35%, rgba(31,233,149,1) 100%)",
    },
    Dark: {
      "--theme-text-neutral": "#a7a7a7",
      "--theme-text-color": "#6167af",
      "--theme-text-color-two": "#1fe995",
      "--theme-background-color": "#191919",
      "--theme-background-color-two": "#1b1b1b",
      "--theme-gradient": "linear-gradient(72deg, #6167af 0%, rgba(153,153,233,1) 35%, rgba(31,233,149,1) 100%)",
    }
  };

  constructor(private localStorageService: LocalStorageService) {
    const inStorage = this.localStorageService.get('theme');
    if (inStorage) this.currentTheme.set(inStorage as AvailableThemes);
    effect(() => {
      const selected = this.currentTheme();
      this.localStorageService.set('theme', selected as AvailableThemes);
      Object.entries(this.themes[selected]).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
      });
      // if (newTheme) {
      //   const validTheme = this.themes[newTheme];
      // }
      // console.log(newTheme)
      // Object.entries(newTheme).forEach(([key, value]) => {
      //   console.log(key)
      //   document.documentElement.style.setProperty(key, value);
      // });
      console.log(`The current theme is: ${this.currentTheme()}`);
    });
  }

  public get theme() : WritableSignal<AvailableThemes> {
    return this.currentTheme;
  }

  // TODO Define theme model / interface
  public get getThemes() : any {
    return this.themes;
  }

  public set setTheme(v : AvailableThemes) {
    if (this.themes.hasOwnProperty(v)) this.currentTheme.set(v);
  }

}
