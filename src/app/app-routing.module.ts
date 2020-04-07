import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LabOneComponent} from './lab-one/lab-one.component';


const routes: Routes = [
  {
    path: 'lab-one',
    component: LabOneComponent
  },
  {
    path: 'lab-two',
    loadChildren: () => import('./lab-two/lab-two.module').then(m =>
        m.LabTwoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
