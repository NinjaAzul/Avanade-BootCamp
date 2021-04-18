import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { NavBarComponent } from "./components/nav-bar/nav-bar-component";
import { Error404Component } from './components/error-404/404.component';


@NgModule({
  declarations:[
    NavBarComponent,
    Error404Component,
  ],
  imports:[
    RouterModule.forChild([
      {
        path: '**', component: Error404Component
      },
    ])
  ],
  exports:[
    NavBarComponent
  ],
})
export class CoreModule {}
