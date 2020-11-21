import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
// import { Routes } from "@angular/router";
// import { NSEmptyOutletComponent, NativeScriptCommonModule } from "nativescript-angular";
import { NativeScriptRouterModule, NSEmptyOutletComponent } from "nativescript-angular/router";
import { TabsComponent } from "./tabs.component";
import { NativeScriptCommonModule } from "nativescript-angular/common";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
            {
                path: "default", component: TabsComponent, children: [
                    {
                        path: "festival",
                        component: NSEmptyOutletComponent,
                        loadChildren: () => import("~/app/festival/festival.module").then((m) => m.FestivalModule),
                        outlet: "festivalTab"
                    },
                    {
                        path: "friend",
                        component: NSEmptyOutletComponent,
                        loadChildren: () => import("~/app/friend/friend.module").then((m) => m.FriendModule),
                        outlet: "friendTab"
                    },
                    {
                        path: "chat",
                        component: NSEmptyOutletComponent,
                        loadChildren: () => import("~/app/chat/chat.module").then((m) => m.ChatModule),
                        outlet: "chatTab"
                    },
                    {
                        path: "match",
                        component: NSEmptyOutletComponent,
                        loadChildren: () => import("~/app/match/match.module").then((m) => m.MatchModule),
                        outlet: "matchTab"
                    },
                    {
                        path: "profile",
                        component: NSEmptyOutletComponent,
                        loadChildren: () => import("~/app/profile/profile.module").then((m) => m.ProfileModule),
                        outlet: "profileTab"
                    }
                ]
            }
        ])
    ],
    declarations: [
        TabsComponent
    ],
    providers: [
    ],
    schemas: [NO_ERRORS_SCHEMA]
})

export class TabsModule { }
