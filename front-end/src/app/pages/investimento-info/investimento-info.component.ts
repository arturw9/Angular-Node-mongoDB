import { Router } from '@angular/router';
import {Component, inject} from '@angular/core';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';

@Component({
  selector: 'app-investimento-info',
  templateUrl: './investimento-info.component.html',
  styleUrls: ['./investimento-info.component.css']
})

export class InvestimentoInfoComponent {
  durationInSeconds = 3;

  constructor(private _snackBar: MatSnackBar,
    private router: Router) {}

  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyAnnotatedComponent, {
      duration: this.durationInSeconds * 1000,
    });
    this.router.navigate([`/investimentos`]);
  }
}
@Component({
  selector: 'app-investimento-info',
  templateUrl: '../../tools/snackBar.html',
  styles: [
    `
    :host {
      display: flex;
    }


  `,
  ],
})
export class PizzaPartyAnnotatedComponent {
  snackBarRef = inject(MatSnackBarRef);
}
