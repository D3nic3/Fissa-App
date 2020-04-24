import { Component, OnInit } from "@angular/core";
import { Festival } from "./festival";
import { FestivalService } from "./festival.service";

@Component({
    selector: "Festival",
    templateUrl: "./festival.component.html",
})
export class FestivalComponent implements OnInit {
    festivals: Festival[];

    constructor(private festivalService: FestivalService) { }

    ngOnInit() {
        this.festivalService.findAll().subscribe(data => {
            this.festivals = data;
        });
    }
}
