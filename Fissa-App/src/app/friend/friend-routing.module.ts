import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { FriendComponent } from "./friend.component";

const routes: Routes = [
    // { path: "", redirectTo: "friend" },
    { path: "friend", component: FriendComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class FriendRoutingModule { }
