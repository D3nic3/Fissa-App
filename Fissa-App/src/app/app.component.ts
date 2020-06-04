import { Component, OnInit, Inject } from "@angular/core";
import { FestivalService } from "./festival/festival.service";
import { Festival } from "./festival/festival";
import { Observable } from "rxjs";
import { systemAppearance } from "tns-core-modules/application/application";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
    styleUrls: ["app.component.css"],
    providers: [FestivalService]
})
export class AppComponent implements OnInit {
    public festival: Observable<Object>;

    constructor(@Inject(FestivalService)private festivalService: FestivalService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        console.log("Above!");
        // this.festival = this.festivalService.getFestival(1);
        this.festivalService.getFestival(1).subscribe(val => console.log(val));
        console.log("cuh");
        // Init your component properties here.
    }
}
