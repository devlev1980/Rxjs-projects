import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BorderDirective } from './border.directive';

@NgModule({
    declarations: [
        AppComponent,
        BorderDirective
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    exports: [
        BorderDirective
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
