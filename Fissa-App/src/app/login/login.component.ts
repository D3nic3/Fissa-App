import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent {
    // implements OnInit
    constructor(private routerExtension: RouterExtensions) {}

    // ngOnInit(): void {}

    // goBack(): void {
    //     this.routerExtension.back();
    // }

    onNavigateWelcome() {
        this.routerExtension.navigate(["../welcome"], { clearHistory: true });
    }
}
