import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-upgrade-dialog',
  templateUrl: './upgrade-dialog.component.html',
  styleUrl: './upgrade-dialog.component.css'
})
export class UpgradeDialogComponent {
  constructor(public dialogRef: MatDialogRef<UpgradeDialogComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  selectPlan(plan: string): void {
    // Implémentez la logique de sélection de plan ici
    console.log(`Plan sélectionné: ${plan}`);
  }

}
