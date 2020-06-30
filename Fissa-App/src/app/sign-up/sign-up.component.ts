import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "SignUp",
    moduleId: module.id,
    templateUrl: "./sign-up.component.html",
    styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent {
    constructor(private routerExtension: RouterExtensions) {}

    // navigate to email page
    onEmail() {
        this.routerExtension.navigate(["../sign-up-email"]);
    }
}
