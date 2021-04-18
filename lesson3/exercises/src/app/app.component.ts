import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Exercises: Angular Lesson 3";

  color = "green";
  height = 0;
  width = 0;
  message = "Space shuttle ready for takeoff!";

  handleTakeOff() {
    let result = window.confirm(
      "Are you sure the shuttle is ready for takeoff?"
    );
    if (result) {
      this.color = "blue";
      this.height = 10000;
      this.width = 0;
      this.message = "Shuttle in flight.";
    }
  }

  handleLanding() {
    window.alert("The shuttle is landing. Landing gear engaged.");
      this.color = "green";
      this.height = 0;
      this.width = 0;
      this.message = "The shuttle has landed.";
  }

  handleAbort() {
    let result = window.confirm("Are you sure you want to abort the mission?")
    if (result) {
      this.color = "red";
      this.height = 0;
      this.width = 0;
      this.message = "Mission aborted.";
    }
  }

  up() {
    const shuttle = document.querySelector('img');
    let shuttleBottom = shuttle.getAttribute('style.bottom');

    shuttleBottom += 10;
    this.height += 10000;
  }

}
