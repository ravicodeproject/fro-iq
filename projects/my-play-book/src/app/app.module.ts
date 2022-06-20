import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyGuideComponent } from './component/my-guide/my-guide.component';
import { BookFrameComponent } from './book-frame/book-frame.component';

@NgModule({
  declarations: [
    AppComponent,
    MyGuideComponent,
    BookFrameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
