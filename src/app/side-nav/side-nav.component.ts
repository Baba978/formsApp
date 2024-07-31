import { Component } from '@angular/core';
import { NewFolderDialogComponent } from '../new-folder-dialog/new-folder-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { UpgradeDialogComponent } from '../upgrade-dialog/upgrade-dialog.component';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  constructor(public dialog: MatDialog) {}

  openNewFolderDialog(): void {
    const dialogRef = this.dialog.open(NewFolderDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Nouveau dossier créé:', result);
        // Ajoutez ici la logique pour traiter le nouveau dossier
      }
    });
  }

  openUpgradeDialog() {
    this.dialog.open(UpgradeDialogComponent);
  }

}
