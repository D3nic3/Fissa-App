import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { FriendRoutingModule } from "./friend-routing.module";
import { FriendComponent } from "./friend.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        FriendRoutingModule
    ],
    declarations: [
        FriendComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class FriendModule { }
