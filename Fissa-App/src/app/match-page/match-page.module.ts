import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MatchPageRoutingModule } from "./match-page-routing.module";
import { MatchPageComponent } from "./match-page.component";
import { MatchComponent } from "../match-detail/match-detail.component";

@NgModule({
    imports: [NativeScriptCommonModule, MatchPageRoutingModule],
    declarations: [MatchPageComponent, MatchComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class MatchPageModule { }
