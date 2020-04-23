import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { FestivalComponent } from "./festival/festival.component";

@NgModule({
    bootstrap: [AppComponent],
    providers: [FestivalComponent],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserModule,
    ],
    declarations: [AppComponent, FestivalComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
