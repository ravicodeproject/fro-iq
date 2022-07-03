import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyGuideComponent } from './component/my-guide/my-guide.component';
import { BookFrameComponent } from './component/book-frame/book-frame.component';
import { BookContentComponent } from './component/book-content/book-content.component';
import { TopicComponent } from './component/topic/topic.component';
import { TmplBoardComponent } from './component/playground/tmpl-board/tmpl-board.component';
import { FormlyBoardComponent } from './component/playground/formly-board/formly-board.component';
import { PlaygroundComponent } from './component/playground/playground.component';

@NgModule({
  declarations: [
    AppComponent,
    MyGuideComponent,
    BookFrameComponent,
    BookContentComponent,
    TopicComponent,
    TmplBoardComponent,
    FormlyBoardComponent,
    PlaygroundComponent
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
