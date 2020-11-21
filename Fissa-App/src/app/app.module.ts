import { NgModule, NO_ERRORS_SCHEMA, ErrorHandler, NgModuleFactoryLoader } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule, COMPONENTS } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

import { NSModuleFactoryLoader } from "nativescript-angular/router";

import { enable as traceEnable } from "tns-core-modules/trace";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

traceEnable();

export class MyErrorHandler implements ErrorHandler {
    // this does not work --> is displaying errors that arent even there
    // handleError(error) {
    //     console.log("### ErrorHandler Error: " + error.toString());
    //     console.log("### ErrorHandler Stack: " + error.stack);
    // }

    handleError(error) {}
}

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        HttpClientModule,
        AppRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AppComponent,
        ...COMPONENTS
    ],
    providers: [
        { provide: ErrorHandler, useClass: MyErrorHandler },
        { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader }
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AppModule {}
