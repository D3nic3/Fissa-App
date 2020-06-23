import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LoginComponent } from "./login/login.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { AppComponent } from "./app.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { SignUpEmailComponent } from "./sign-up/sign-up-email/sign-up-email.component";
import { SignUpPasswordComponent } from "./sign-up/sign-up-password/sign-up-password.component";
import { SignUpBirthComponent } from "./sign-up/sign-up-birth/sign-up-birth.component";
import { FestivalMapComponent } from "./festival/festival-map/festival-map.component";

export const COMPONENTS = [LoginComponent, WelcomeComponent, SignUpComponent,
    SignUpEmailComponent, SignUpPasswordComponent, SignUpBirthComponent, FestivalMapComponent];

const routes: Routes = [
    // {
    //     path: "",
    //     redirectTo: "/(festivalTab:festival/default//friendTab:friend/default//matchTab:match/default//chatTab:chat/default//profileTab:profile/default)",
    //     pathMatch: "full"
    // },

    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "welcome", component: WelcomeComponent },
    { path: "sign-up", component: SignUpComponent },
    { path: "sign-up-email", component: SignUpEmailComponent},
    { path: "sign-up-password", component: SignUpPasswordComponent},
    { path: "sign-up-birth", component: SignUpBirthComponent},
    { path: "festival-map", component: FestivalMapComponent},


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
