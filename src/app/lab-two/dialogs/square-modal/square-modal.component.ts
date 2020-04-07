import {Component, Input, OnInit, Output} from '@angular/core';
import {SquareModel} from '../../models/square.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {ShapeModalComponent} from '../shape-modal.component';

@Component({
  selector: 'app-square-modal',
  templateUrl: './square-modal.component.html',
  styleUrls: ['./square-modal.component.scss']
})
export class SquareModalComponent implements OnInit {
  @Input()
  public dialogRef: MatDialogRef<ShapeModalComponent>;
  @Input()
  public ctx: CanvasRenderingContext2D;

  public squareForm: FormGroup;

  constructor(
      private fb: FormBuilder,
  ) { }

  get f() {
    return this.squareForm.controls;
  }

  ngOnInit(): void {
    this.squareForm = this.fb.group({
      identifier: ['Square', Validators.required],
      x: [20, Validators.required],
      y: [20, Validators.required],
      size: [100, Validators.required],
      type: ['stroke', Validators.required],
      color: ['Black', Validators.required]
    });
  }

  closeModal() {
    const square = new SquareModel(this.squareForm.value);
    this.dialogRef.close(square);
  }

}
