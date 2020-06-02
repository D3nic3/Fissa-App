import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

// import { MatchRoutingModule } from "./match-routing.module";
import { MatchComponent } from "./match.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        // MatchRoutingModule,
        // test
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
            { path: "", redirectTo: "match" },
            { path: "match", component: MatchComponent }
        ])
    ],
    declarations: [
        MatchComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MatchModule { }
