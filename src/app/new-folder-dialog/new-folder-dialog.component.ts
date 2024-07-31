import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-folder-dialog',
  templateUrl: './new-folder-dialog.component.html',
  styleUrls: ['./new-folder-dialog.component.scss']
})
export class NewFolderDialogComponent {
  folderName: string = '';
  colors: string[] = ['#ff4081', '#66bb6a', '#42a5f5', '#ffa726', '#ef5350', '#ab47bc'];
  selectedColor: string = '';

  constructor(public dialogRef: MatDialogRef<NewFolderDialogComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onCreate(): void {
    this.dialogRef.close({ name: this.folderName, color: this.selectedColor });
  }

  selectColor(color: string): void {
    this.selectedColor = color;
  }
}
