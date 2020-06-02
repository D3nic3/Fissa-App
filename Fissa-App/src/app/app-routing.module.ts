import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LoginComponent } from "./login/login.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { AppComponent } from "./app.component";

export const COMPONENTS = [LoginComponent, WelcomeComponent];

const routes: Routes = [
    // {
    //     path: "",
    //     redirectTo: "/(festivalTab:festival/default//friendTab:friend/default//matchTab:match/default//chatTab:chat/default//profileTab:profile/default)",
    //     pathMatch: "full"
    // },

    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "welcome", component: WelcomeComponent },
    {
        path: "tabs",
        loadChildren: () =>
            import("~/app/tabs/tabs.module").then(m => m.TabsModule)
    }
];

//     {
//         path: "festival",
//         component: NSEmptyOutletComponent,
//         loadChildren: () => import("~/app/festival/festival.module").then((m) => m.FestivalModule),
//         outlet: "festivalTab"
//     },
//     {
//         path: "friend",
//         component: NSEmptyOutletComponent,
//         loadChildren: () => import("~/app/friend/friend.module").then((m) => m.FriendModule),
//         outlet: "friendTab"
//     },
//     {
//         path: "chat",
//         component: NSEmptyOutletComponent,
//         loadChildren: () => import("~/app/chat/chat.module").then((m) => m.ChatModule),
//         outlet: "chatTab"
//     },
//     {
//         path: "match",
//         component: NSEmptyOutletComponent,
//         loadChildren: () => import("~/app/match/match.module").then((m) => m.MatchModule),
//         outlet: "matchTab"
//     },
//     {
//         path: "profile",
//         component: NSEmptyOutletComponent,
//         loadChildren: () => import("~/app/profile/profile.module").then((m) => m.ProfileModule),
//         outlet: "profileTab"
//     }
// ];

@NgModule({
    imports: [
        NativeScriptRouterModule.forRoot(routes, { enableTracing: true })],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
