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

    takeOffEnabled = true;

    handleTakeOff(rocketImage) {
        let result = window.confirm(
            "Are you sure the shuttle is ready for takeoff?"
        );
        if (result) {
            this.color = "blue";
            this.height = 10000;
            this.message = "Shuttle in flight.";
            this.takeOffEnabled = false;
            rocketImage.style.bottom = "10px";
        }
    }

    handleLanding(rocketImage) {
        window.alert("The shuttle is landing. Landing gear engaged.");
        this.color = "green";
        this.height = 0;
        this.message = "The shuttle has landed.";
        this.takeOffEnabled = true;
        rocketImage.style.bottom = "0px";
    }

    handleAbort(rocketImage) {
        let result = window.confirm(
            "Are you sure you want to abort the mission?"
        );
        if (result) {
            this.color = "red";
            this.height = 0;
            this.message = "Mission aborted.";
            this.takeOffEnabled = true;
            rocketImage.style.bottom = "0px";
        }
    }

    moveRocket(rocketImage: any, direction: string) {
        if (direction === "right") {
            let position = parseInt(rocketImage.style.left)
            let movement = position  + 10 + "px";
            if (position < 470) {
                rocketImage.style.left = movement;
                this.width = this.width + 10000;
            }
        }

        if (direction === "left") {
            let position = parseInt(rocketImage.style.left);
            let movement = position - 10 + "px";
            if (position > -20) {
                rocketImage.style.left = movement;
                this.width = this.width - 10000;
            }
        }

        if (direction === "up") {
            let position = parseInt(rocketImage.style.bottom);
            let movement = position + 10 + "px";
            if (position < 330) {
                rocketImage.style.bottom = movement;
                this.height = this.height + 10000;
            }
        }

        if (direction === "down") {
            let position = parseInt(rocketImage.style.bottom);
            let movement = position - 10 + "px";
            if (position > -10) {
                rocketImage.style.bottom = movement;
                this.height = this.height - 10000;
            }
        }
        this.checkRocketPosition(rocketImage);
    }

    checkRocketPosition(rocketImage: any) {
        const rocketPositionBottom: number = parseInt(rocketImage.style.bottom);
        const rocketPositionLeft: number = parseInt(rocketImage.style.left);
        if (
            rocketPositionBottom <= 0 ||
            rocketPositionBottom >= 330 ||
            rocketPositionLeft >= 470 ||
            rocketPositionLeft <= -20
        ) {
            this.colorOrange();
        } else {
            this.colorBlue();
        }
    }

    colorOrange() {
        this.color = "orange";
    }

    colorBlue() {
        this.color = "blue";
    }
}
