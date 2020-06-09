import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { screen } from "tns-core-modules/platform";

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent {
    constructor(private routerExtension: RouterExtensions) {}

    onNavigateWelcome() {
        this.routerExtension.navigate(["../welcome"], { clearHistory: true });
    }
}
