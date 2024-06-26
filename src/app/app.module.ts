import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
