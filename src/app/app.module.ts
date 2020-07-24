import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { HeaderComponent } from './header/header.component';
import { AddComponent } from './add/add.component';
import { ReduceactorsPipe } from './reduceactors.pipe';
import { DurationPipe } from './duration.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HeaderComponent,
    AddComponent,
    ReduceactorsPipe,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
