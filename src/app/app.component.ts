import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from './form.component/form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'form-test-project';

  constructor(public dialog: MatDialog) {}
  
  openDialog(): void 
  {
    const dialogRef = this.dialog.open(FormComponent, {
      width: '300px',
      height: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      // do something
    });
  }
}
