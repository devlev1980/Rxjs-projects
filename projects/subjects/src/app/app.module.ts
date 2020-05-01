import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectComp } from './components/subject/subject-comp.component';
import { BehaviorSubjectComp } from './components/behavior-subject/behavior-subject-comp.component';
import {HttpClientModule} from '@angular/common/http';
import { AsyncSubjectCompComponent } from './components/async-subject/async-subject-comp.component';
import { ReplaySubjectCompComponent } from './components/replay-subject-comp/replay-subject-comp.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectComp,
    BehaviorSubjectComp,
    AsyncSubjectCompComponent,
    ReplaySubjectCompComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
