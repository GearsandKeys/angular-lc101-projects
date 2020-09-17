import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';
  takeOffEnabled: boolean = true;
  borderLeft: boolean = false;
  borderRight: boolean = false;
  borderTop: boolean = false;
  borderBottom: boolean = false;
  
  flightColor = "black";
  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  fuelLevel = 10000;


  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
       this.takeOffEnabled = false;
       this.flightColor = "black";
       this.fuelLevel -= 100;
    }
  }

  handleLand(rocketImage) {
    this.color="green";
    this.height = 0;
    rocketImage.style.bottom = 0;
    rocketImage.style.left = 0;
    this.takeOffEnabled = true;
    this.message = 'Welcome back home!';
  }
  handleMissionAbort(rocketImage) {
    this.color="green";
    this.height = 0;
    rocketImage.style.bottom = 0;
    this.takeOffEnabled = true;
    this.message = 'Flight Aborted.';
    this.flightColor = "red";

  }

  moveRocket(rocketImage, direction) {
    if(parseInt(rocketImage.style.left) > 160) {
      this.borderRight = true;
    }else if (parseInt(rocketImage.style.left) < -10) {
      this.borderLeft = true;
    }else if (parseInt(rocketImage.style.bottom) < 0) {
      this.borderBottom = true;
    }else if (parseInt(rocketImage.style.bottom) > 310) {
      this.borderTop = true;
    } else {
      this.borderTop = false;
      this.borderBottom = false;
      this.borderRight = false;
      this.borderLeft = false;
    }

    if (parseInt(rocketImage.style.left) < 0 || parseInt(rocketImage.style.left) > 150 || parseInt(rocketImage.style.bottom) < 0 || parseInt(rocketImage.style.bottom) > 300) {
      this.color = "red";
    }else{
      this.color = "blue";
    }


    if (direction === 'right') {
    let movement = parseInt(rocketImage.style.left) + 10 + 'px';
    rocketImage.style.left = movement;
    this.width = this.width + 1000;
    } else if (direction === 'left') {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
    }else if (direction === 'down') {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
    } else {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
    }
    this.fuelLevel -= 100;
    if (this.fuelLevel < 1) {
      this.handleMissionAbort(rocketImage);
    }
    
 }
}
