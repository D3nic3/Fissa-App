import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { FestivalService, DataItem } from "../festival.service";
import { Observable } from "rxjs";

@Component({
    selector: "ItemDetail",
    templateUrl: "./item-detail.component.html",
    styleUrls: ["./item-detail.component.css"]

})
export class ItemDetailComponent implements OnInit {
   public
   item: DataItem;

   constructor(
        private _data: FestivalService,
        private _route: ActivatedRoute,
        private _routerExtensions: RouterExtensions,
        private router: Router,
        private festivalService: FestivalService,
        private routerExtensions: RouterExtensions
        //    observable
    ) { }

   ngOnInit(): void {
        const id = +this._route.snapshot.params.id;
        // this.item = this._data.getItem(id);
        this.festivalService.getItem(id).subscribe(item => {                    // observable
            this.item = item;
        });
    }

   onBackTap(): void {
        this._routerExtensions.back();
    }

    // going to matchpage navigation
//    onMatch() {
//         this.router.navigate(["./match"]);
//     }

}
