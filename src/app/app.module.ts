import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialListComponent } from './components/tutorial-list/tutorial-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddTutorialComponent,
    TutorialListComponent,
    TutorialDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
