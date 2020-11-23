// import { ProfileRoutingModule } from "./profile-routing.module";
import { ProfileEditComponent } from "./profile-edit.component";
import { ProfileEditService } from "./profile-edit.service";

import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
            { path: "", redirectTo: "profile" },
            { path: "profile", component: ProfileEditComponent }
        ]),
        // ProfileRoutingModule,
        NativeScriptHttpClientModule
    ],
    declarations: [
        ProfileEditComponent
    ],
    providers: [
        ProfileEditService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ProfileModule { }
