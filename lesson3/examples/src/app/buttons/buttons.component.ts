import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactiveGold: boolean = false;
   inactiveSilver: boolean = false;
   inactiveCopper: boolean = false;
   activeFrustration: boolean= true;

   constructor() { }

   ngOnInit() { }

   activateTheButtons() {
      this.inactiveGold = false;
      this.inactiveSilver = false;
      this.inactiveCopper = false;
   }
}
/*
   Book Example for the buttons all turning back on, each of the buttons has [class.gold]="buttonState[0]" etc
   buttonHeading: string = "Buttons"
   active: boolean = true;
   buttonState: boolean[] = [true, true, true];

   reactivateButtons() {
      for (let i = 0; i < this.buttonState.length; i++) {
         this.buttonState[i] = true;
      }
      return this.buttonState;
   }
   */

