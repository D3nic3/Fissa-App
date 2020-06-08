import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { FestivalComponent } from "./festival.component";
import { FestivalDetailComponent } from "./festival-detail/festival-detail.component";

const routes: Routes = [
    { path: "default", component: FestivalComponent },
    { path: "item/:id", component: FestivalDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class FestivalRoutingModule { }
