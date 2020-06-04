import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Festival } from "./festival";
import { FestivalService } from "./festival.service";

@Component({
    selector: "FestivalDetail",
    templateUrl: "./festival-detail.component.html"
})
export class FestivalDetailComponent implements OnInit {
    festival: Festival;

    constructor(
        private festivalService: FestivalService,
        private route: ActivatedRoute,
        private routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.festival = this.festival.getFestival(id);
    }

    onBackTap(): void {
        this.routerExtensions.back();
    }
}
