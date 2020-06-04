import { Component, OnInit } from "@angular/core";

import { DataService, DataItem } from "../shared/data.service";
import {Festival} from "./festival";
import {FestivalService} from "./festival.service";
import { Observable } from "rxjs";

@Component({
    selector: "Festival",
    moduleId: module.id,
    templateUrl: "./festival.component.html"
})
export class FestivalComponent implements OnInit {
    public festival: Observable<Object>;

    constructor(private festivalService: FestivalService) { }

    ngOnInit(): void {
        this.festival = this.festivalService.getFestival(1);
    }
}
