import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "tabs-page",
    moduleId: module.id,
    templateUrl: "./tabs.component.html",
    styleUrls: ["./tabs.component.css"]
})
export class TabsComponent implements OnInit {
    // @ViewChild("tabStrip") tabStrip: ElementRef;

    constructor(
        private routerExtension: RouterExtensions,
        private activeRoute: ActivatedRoute) {
        // Use the component constructor to inject providers.
    }

    ngOnInit() {
        // Use the "ngOnInit" handler to initialize data for the view.
        this.routerExtension.navigate([{ outlets:
            { festivalTab: ["festival"], friendTab: ["friend"], matchTab: ["match"], chatTab: ["chat"], profileTab: ["profile"] } }], { relativeTo: this.activeRoute });
    }
}
