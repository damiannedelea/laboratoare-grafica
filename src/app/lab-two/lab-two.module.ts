import {NgModule} from '@angular/core';
import {CubeModalComponent} from './dialogs/cube-modal/cube-modal.component';
import {SquareModalComponent} from './dialogs/square-modal/square-modal.component';
import {TriangleModalComponent} from './dialogs/triangle-modal/triangle-modal.component';
import {MaterialModule} from '../material/material.module';
import {LabTwoComponent} from './lab-two.component';
import {ShapeModalComponent} from './dialogs/shape-modal.component';
import {CommonModule} from '@angular/common';
import {LabTwoRoutingModule} from './lab-two-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

const MODALS = [
    ShapeModalComponent,
    SquareModalComponent,
    CubeModalComponent,
    TriangleModalComponent
];

@NgModule({
    declarations: [
        LabTwoComponent,
        ...MODALS
    ],
    imports: [
        ReactiveFormsModule,
        MaterialModule,
        CommonModule,
        LabTwoRoutingModule
    ],
    entryComponents: [
        ...MODALS
    ],
    providers: [],
})
export class LabTwoModule {
}
