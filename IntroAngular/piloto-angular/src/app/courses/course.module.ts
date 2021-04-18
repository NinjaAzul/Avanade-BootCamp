import { PipeModule } from './../shared/pipes/pipe.module';
import { StarModule } from './../shared/components/star/star.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CourseInfoComponent } from './course-info.component';
import { CourseListComponent } from './course-list.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';


@NgModule({
  declarations:[
    CourseListComponent,
    CourseInfoComponent,
  ],
  imports:[
    CommonModule,
    FormsModule,
    StarModule,
    PipeModule,
    RouterModule.forChild([
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      },
    ]),
  ],
})
export class CourseModule {

}
