import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: "Match",
    templateUrl: "./match.component.html",
    styleUrls: ["./match.css"]
})
export class MatchComponent implements OnInit {

    constructor(private page: Page) {

    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}
