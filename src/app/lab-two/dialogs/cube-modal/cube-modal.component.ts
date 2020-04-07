import {Component, Input, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {ShapeModalComponent} from '../shape-modal.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SquareModel} from '../../models/square.model';
import {CubeModel} from '../../models/cube.model';

@Component({
  selector: 'app-cube-modal',
  templateUrl: './cube-modal.component.html',
  styleUrls: ['./cube-modal.component.scss']
})
export class CubeModalComponent implements OnInit {
  @Input()
  public dialogRef: MatDialogRef<ShapeModalComponent>;
  @Input()
  public ctx: CanvasRenderingContext2D;

  public cubeForm: FormGroup;

  constructor(
      private fb: FormBuilder,
  ) { }

  get f() {
    return this.cubeForm.controls;
  }

  ngOnInit(): void {
    this.cubeForm = this.fb.group({
      identifier: ['Cube', Validators.required],
      x: [20, Validators.required],
      y: [20, Validators.required],
      height: [100, Validators.required],
      width: [100, Validators.required],
      shift: [25, Validators.required],
      type: ['stroke', Validators.required],
      color: ['Red', Validators.required]
    });
  }

  closeModal() {
    const cube = new CubeModel(this.cubeForm.value);
    this.dialogRef.close(cube);
  }

}
