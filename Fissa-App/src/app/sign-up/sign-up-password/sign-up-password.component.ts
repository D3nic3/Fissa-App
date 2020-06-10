import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";


@Component({
    selector: "SignUpPassword",
    moduleId: module.id,
    templateUrl: "./sign-up-password.component.html",
    styleUrls: ["./sign-up-password.component.css"]
})
export class SignUpPasswordComponent {

    // hide show password
    pwdSecure = true;
    confirmPwdSecure = true;
    pwdSecures = true;
    confirmPwdSecures = true;

    // implements OnInit
    constructor(private routerExtension: RouterExtensions) {
    }

    onBirth() {
        this.routerExtension.navigate(["../sign-up-birth"]);
    }


}
