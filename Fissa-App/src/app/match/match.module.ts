import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MatchRoutingModule } from "./match-routing.module";
import { MatchComponent } from "./match.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        MatchRoutingModule
    ],
    declarations: [
        MatchComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MatchModule { }
