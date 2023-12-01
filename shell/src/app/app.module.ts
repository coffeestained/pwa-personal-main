import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './layout/root/root.component';

import { ModuleFederationService } from './services/module-federation.service';
import { WelcomeSplashComponent } from './components/welcome-splash/welcome-splash.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { HeaderComponent } from './layout/header/header.component';
import { BodyComponent } from './layout/body/body.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { LogoComponent } from './layout/logo/logo.component';

import { MatIconModule } from '@angular/material/icon';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { GetConnectedComponent } from './components/get-connected/get-connected.component';
import { CardComponent } from './components/welcome-splash/card/card.component';
import { ArchitectureComponent } from './components/architecture/architecture.component';

@NgModule({
  declarations: [
    RootComponent,
    WelcomeSplashComponent,
    NavigationComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    RootComponent,
    PageNotFoundComponent,
    LogoComponent,
    ThemeToggleComponent,
    SolutionsComponent,
    GetConnectedComponent,
    CardComponent,
    ArchitectureComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (mfeService: ModuleFederationService) => () =>
      mfeService.init(),
      deps: [ModuleFederationService],
      multi: true,
    },
    provideAnimations()
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [RootComponent],
})
export class AppModule {}
