import { Component, OnInit } from "@angular/core";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
    styleUrls: ["app.component.css"],
})
export class AppComponent implements OnInit {
    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}
