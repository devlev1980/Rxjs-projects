import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreathComponent } from './breath/breath.component';
import { BorderDirective } from './directives/border.directive';

@NgModule({
  declarations: [
    AppComponent,
    BreathComponent,
    BorderDirective
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
