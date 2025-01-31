import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule} from '@angular/common/http'
import { BookService } from './Services/book.service';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    // provideClientHydration(withEventReplay())
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
