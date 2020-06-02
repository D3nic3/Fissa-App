import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { MatchComponent } from "./match.component";

const routes: Routes = [
    // { path: "", redirectTo: "match" },
    { path: "match", component: MatchComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class MatchRoutingModule { }
