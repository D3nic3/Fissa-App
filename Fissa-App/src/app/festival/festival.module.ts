import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { FestivalRoutingModule } from "./festival-routing.module";
import { FestivalComponent } from "./festival.component";

@NgModule({
    imports: [NativeScriptCommonModule, FestivalRoutingModule],
    declarations: [FestivalComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class FestivalModule {}
