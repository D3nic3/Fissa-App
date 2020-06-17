import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { FestivalComponent } from "./festival.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";

const routes: Routes = [
    // { path: "", redirectTo: "festival" },
    { path: "festival", component: FestivalComponent },
    { path: "item/:id", component: ItemDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class FestivalRoutingModule { }
