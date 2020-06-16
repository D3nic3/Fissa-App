import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";


import { MatchRoutingModule } from "./match-routing.module";
import { MatchComponent } from "./match.component";
import { MatchCardComponent } from "../match-card/match-card.component";

@NgModule({
    bootstrap: [
        MatchComponent
    ],
    imports: [
        NativeScriptCommonModule,
        MatchRoutingModule
    ],
    declarations: [
        MatchComponent,
        MatchCardComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
