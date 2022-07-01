import { MyGuideComponent } from './component/my-guide/my-guide.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFrameComponent } from './component/book-frame/book-frame.component';
import { BookContentComponent } from './component/book-content/book-content.component';
import { TopicComponent } from './component/topic/topic.component';

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
        component: BookFrameComponent,
        children:[
          {
            path:':bookname',
            component: BookContentComponent,
            children:[{
              path:':topicname',
              component: TopicComponent,
            }]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
