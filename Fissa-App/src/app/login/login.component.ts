import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { screen } from "tns-core-modules/platform";
import { alert, prompt } from "tns-core-modules/ui/dialogs";

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent {
    constructor(private routerExtension: RouterExtensions) {}

    //sign up navigate to welcomepage
    onNavigateWelcome() {
        this.routerExtension.navigate(["../welcome"], { clearHistory: true });
    }

    //function forget password loggin
    forgotPassword() {
  prompt({
    title: "Forgot Password",
    message: "Enter the email address you used to register for FISSA to reset your password.",
    defaultText: "",
    okButtonText: "Ok",
    cancelButtonText: "Cancel"
  }).then((data) => {
    if (data.result) {
      // Call the backend to reset the password
      alert({
        title: "FISSA",
        message: "Your password was successfully reset. Please check your email for instructions on choosing a new password.",
        okButtonText: "Ok",
        cancelable: false
      });
    }
  });
}
}
