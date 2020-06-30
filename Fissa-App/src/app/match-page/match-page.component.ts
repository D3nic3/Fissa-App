import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: "MatchPage",
    templateUrl: "./match-page.component.html"
})
export class MatchPageComponent implements OnInit {
    constructor(private page: Page) {
        // this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    }
}
