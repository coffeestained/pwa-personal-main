import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'shell-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent {

  public darkMode = false;

  constructor(private themeService: ThemeService) {
    this.darkMode = this.themeService.theme() === "Dark";
  }

  public toggled() {
    const mode = this.darkMode ? "Dark" : "Light";
    this.themeService.setTheme = mode;
  }
}
