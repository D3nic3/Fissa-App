import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Welcome",
    moduleId: module.id,
    templateUrl: "./welcome.component.html",
    styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent {
    // implements OnInit
    // constructor(private location: Location) {}
    constructor(private routerExtension: RouterExtensions) {}

    // ngOnInit(): void {}

    // goBack(): void {
    //     this.location.back();
    // }

    onLogout() {
        this.routerExtension.navigate(["../login"], { clearHistory: true });
    }
}
