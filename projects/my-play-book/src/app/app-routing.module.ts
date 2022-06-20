import { MyGuideComponent } from './component/my-guide/my-guide.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFrameComponent } from './book-frame/book-frame.component';

const routes: Routes = [
  {
    path: '',
    component: MyGuideComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'book-frame'
      },
      {
        path: 'book-frame',
        component: BookFrameComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
