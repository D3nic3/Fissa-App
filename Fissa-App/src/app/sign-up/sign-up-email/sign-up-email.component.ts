import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "SignUpEmail",
    moduleId: module.id,
    templateUrl: "./sign-up-email.component.html",
    styleUrls: ["./sign-up-email.component.css"]
})
export class SignUpEmailComponent {
    constructor(private routerExtension: RouterExtensions) {}

    // navigate to signup page password
    onPassword() {
        this.routerExtension.navigate(["../sign-up-password"]);
    }
}
