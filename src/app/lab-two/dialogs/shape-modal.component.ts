// @ts-ignore
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
    selector: 'app-shape-modal',
    template: `
        <h1 mat-dialog-title>Add new {{selectedShape}}</h1>
        <div mat-dialog-content>
            <mat-form-field>
                <mat-label>Shape type</mat-label>
                <mat-select [(value)]="selectedShape">
                    <mat-option *ngFor="let shape of shapes" [value]="shape">
                        {{shape}}
                    </mat-option>
                </mat-select>
            </mat-form-field>
            <app-square-modal [ctx]="data.ctx" [dialogRef]="dialogRef" *ngIf="selectedShape==='Square'"></app-square-modal>
            <app-cube-modal [ctx]="data.ctx" [dialogRef]="dialogRef" *ngIf="selectedShape==='Cube'"></app-cube-modal>
            <app-triangle-modal *ngIf="selectedShape==='Triangle'"></app-triangle-modal>
        </div>
        `,
    styles: [`
    .mat-dialog-content {
        overflow: initial;
    }
    `]
})
export class ShapeModalComponent implements OnInit {
    public shapes = ['Square', 'Cube', 'Triangle'];
    public selectedShape = 'Square';
    constructor(
        public dialogRef: MatDialogRef<ShapeModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: {ctx: CanvasRenderingContext2D}) {}

    ngOnInit(): void {
    }

}
