import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import {FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Child3Component } from './child3/child3.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Child2Component,
    Child3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: Child2Component },
      {path: 'child3', component: Child3Component},
      {path: 'home', redirectTo: '/'},
      {path: 'contact', redirectTo: '/child3', pathMatch: 'full'}
      //{path: 'child3', redirectTo: 'Child1Component'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
