import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

// import { ChatRoutingModule } from "./chat-routing.module";
import { ChatComponent } from "./chat.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        // ChatRoutingModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
            { path: "", redirectTo: "chat" },
            { path: "chat", component: ChatComponent }
        ])
    ],
    declarations: [ChatComponent],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ChatModule {}
