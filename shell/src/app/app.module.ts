import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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


@NgModule({
  declarations: [RootComponent, WelcomeSplashComponent, NavigationComponent, HeaderComponent, BodyComponent, FooterComponent, RootComponent, PageNotFoundComponent, LogoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [                            // Add APP_INITIALIZER
    {
      provide: APP_INITIALIZER,
      useFactory: (mfeService: ModuleFederationService) => () =>
      mfeService.init(),
      deps: [ModuleFederationService],
      multi: true,
    },
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [RootComponent],
})
export class AppModule {}