import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/pages/home/home.component';
import { SubmitedComponent } from './components/pages/submited/submited.component';
import { FormComponent } from './components/form/form.component';
import { SucessComponent } from './components/sucess/sucess.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpaceDigitsPipe } from './pipes/numberspace.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubmitedComponent,
    FormComponent,
    SucessComponent,
    SpaceDigitsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
