import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

// import { FriendRoutingModule } from "./friend-routing.module";
import { FriendComponent } from "./friend.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        // FriendRoutingModule,
        // test
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
            { path: "", redirectTo: "friend" },
            { path: "friend", component: FriendComponent}
        ])
    ],
    declarations: [
        FriendComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class FriendModule { }
