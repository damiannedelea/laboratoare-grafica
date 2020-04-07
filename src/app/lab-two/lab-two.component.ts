import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ShapeModalComponent} from './dialogs/shape-modal.component';

@Component({
  selector: 'app-lab-two',
  templateUrl: './lab-two.component.html',
  styleUrls: ['./lab-two.component.scss']
})
export class LabTwoComponent implements OnInit {
  public sidenavOpened = false;

  @ViewChild('canvas', {static: true})
  canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;



  constructor(
      public dialog: MatDialog
  ) {

  }

  public ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
  }

  public cleanCanvas(): void {
    this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
  }

  public openShapeModal(): void {
    const dialogRef = this.dialog.open(ShapeModalComponent, {
      data: {ctx: this.ctx}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      result.draw(this.ctx);
    });
  }


}
