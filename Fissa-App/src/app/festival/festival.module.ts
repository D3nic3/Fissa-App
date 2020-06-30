import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { FestivalRoutingModule } from "./festival-routing.module";
import { FestivalComponent } from "./festival.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        FestivalRoutingModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
            { path: "", redirectTo: "festival" },
            { path: "festival", component: FestivalComponent},
            { path: "item/:id", component: ItemDetailComponent}
        ])
    ],
    declarations: [
        FestivalComponent,
        ItemDetailComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class FestivalModule { }
