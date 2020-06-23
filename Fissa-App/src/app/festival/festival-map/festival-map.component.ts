import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "FestivalMap",
    moduleId: module.id,
    templateUrl: "./festival-map.component.html",
    styleUrls: ["./festival-map.component.css"]
})
export class FestivalMapComponent implements OnInit {
    constructor(private _routerExtensions: RouterExtensions) {}

    ngOnInit(): void {}

    onBackTap(): void {
        this._routerExtensions.back();
    }
}
