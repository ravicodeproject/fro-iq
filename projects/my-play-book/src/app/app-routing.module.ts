import { MyGuideComponent } from './component/my-guide/my-guide.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFrameComponent } from './component/book-frame/book-frame.component';
import { BookContentComponent } from './component/book-content/book-content.component';
import { TopicComponent } from './component/topic/topic.component';
import { PlaygroundComponent } from './component/playground/playground.component';
import { TmplBoardComponent } from './component/playground/tmpl-board/tmpl-board.component';
import { FormlyBoardComponent } from './component/playground/formly-board/formly-board.component';
import { MyCounterComponent } from './component/my-counter/my-counter.component';

const routes: Routes = [
  {
    path: 'playground',
    component: PlaygroundComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'tmpl',
      },
      {
        path: 'tmpl',
        component: TmplBoardComponent,
      },
      {
        path: 'formly',
        component: FormlyBoardComponent,
      }
    ],
  },
  {
    path:'count',
    component:MyCounterComponent
  },
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
