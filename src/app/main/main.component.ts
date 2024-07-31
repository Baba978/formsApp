import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateFormDialogComponent } from '../create-form-dialog/create-form-dialog.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
selectedOption: any;

constructor(public dialog: MatDialog) {}

  openCreateFormDialog(): void {
    const dialogRef = this.dialog.open(CreateFormDialogComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
