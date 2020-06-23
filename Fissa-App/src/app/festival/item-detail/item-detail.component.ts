import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { FestivalService, DataItem } from "../festival.service";
import { Observable } from "rxjs";
import { TabView } from "tns-core-modules/ui/tab-view";


@Component({
    selector: "ItemDetail",
    templateUrl: "./item-detail.component.html",
    styleUrls: ["./item-detail.component.css"]

})
export class ItemDetailComponent implements OnInit {

    public item: DataItem;



    constructor(
        private _data: FestivalService,
        private _route: ActivatedRoute,
        private _routerExtensions: RouterExtensions,
        private router: Router,
        private festivalService: FestivalService,
        private routerExtension: RouterExtensions,
        private _itemService: FestivalService
        //    observable
    ) { }

    // onButtonTap() {
    //     let tabView:TabView = <TabView>this.page.getViewById("tview");
    //     tabView.selectedIndex = 3;
    // }

    ngOnInit(): void {
        const id = +this._route.snapshot.params.id;
        // this.items$ = this._itemService.getItems();
        // this.item = this._data.getItem(id);
        this.festivalService.getItem(id).subscribe(item => {                    // observable
            this.item = item;
        });

        // this._itemService.getItem(id).subscribe(item => {
        //     this.item = item
        // });
    }

    onBackTap(): void {
        this._routerExtensions.back();
    }

    onMap() {
        this.routerExtension.navigate(["../festival-map"]);
    }

    onMatch() {
        this.routerExtension.navigate(["/tabs/default", {outlets: {matchTab: ["match"]}}]);
    }
}
