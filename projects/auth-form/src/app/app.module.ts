import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {GenericFormModule} from './generic-form/generic-form.module';
import {MaterialModule} from './shared/material.module';
import {MatButtonModule} from '@angular/material/button';
import { FormStyleDirective } from './directive/form-style.directive';

@NgModule({
    declarations: [
        AppComponent,
        FormStyleDirective,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        GenericFormModule,
        ReactiveFormsModule,
        MatButtonModule
    ],
    providers: [],
    exports: [
        FormStyleDirective
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
