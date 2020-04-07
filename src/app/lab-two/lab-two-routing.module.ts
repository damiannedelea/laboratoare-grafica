import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LabTwoComponent} from './lab-two.component';


const routes: Routes = [
    {
        path: '',
        component: LabTwoComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LabTwoRoutingModule {
}
