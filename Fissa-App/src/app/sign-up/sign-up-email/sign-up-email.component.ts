import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "SignUpEmail",
    moduleId: module.id,
    templateUrl: "./sign-up-email.component.html",
    styleUrls: ["./sign-up-email.component.css"]
})
export class SignUpEmailComponent {
    // implements OnInit
    constructor(private routerExtension: RouterExtensions) {}

    onPassword() {
        this.routerExtension.navigate(["../sign-up-password"]);
    }
}
