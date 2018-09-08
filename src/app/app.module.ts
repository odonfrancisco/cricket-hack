import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavBarComponent } from './landing-page/nav-bar/nav-bar.component';
import { NutritionalComponent } from './landing-page/nutritional/nutritional.component';
import { BuyNowComponent } from './landing-page/buy-now/buy-now.component';
import { LandingContentComponent } from './landing-page/landing-content/landing-content.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavBarComponent,
    NutritionalComponent,
    BuyNowComponent,
    LandingContentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
