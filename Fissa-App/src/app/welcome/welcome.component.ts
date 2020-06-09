import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { RouterExtensions } from "nativescript-angular/router";
import { alert } from "tns-core-modules/ui/dialogs";

@Component({
    selector: "Welcome",
    moduleId: module.id,
    templateUrl: "./welcome.component.html",
    styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent implements OnInit{

    // constructor(private location: Location) {}
    constructor(private routerExtension: RouterExtensions) {}

    ngOnInit(): void {
    }

    // goBack(): void {
    //     this.location.back();
    // }

    onLogin() {
        this.routerExtension.navigate(["../login"], { clearHistory: true });
    }

    onSignin() {
        this.routerExtension.navigate(["../sign-up"]);
    }

    alert() {
        alert({
            title: "Terms of services",
            message: "Your message Lorem ipsum dolor sit amet, consectetuer adipiscing elit Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. ",
            okButtonText: "Done"
        }).then(() => {
            console.log("The user closed the terms of services.");
        });
    }
}
