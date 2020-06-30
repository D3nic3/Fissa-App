import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NativeScriptRouterModule, RouterExtensions } from "nativescript-angular/router";
import { FestivalService, DataItem } from "../festival.service";
import { Observable } from "rxjs";
import { TabView } from "tns-core-modules/ui/tab-view";
import { TabsComponent } from "~/app/tabs/tabs.component";

@Component({
    selector: "ItemDetail",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html",
    styleUrls: ["./item-detail.component.css"],
})
export class ItemDetailComponent implements OnInit {
    public item: DataItem;

    constructor(
        private _data: FestivalService,
        private _route: ActivatedRoute,
        private _routerExtensions: RouterExtensions,
        private router: Router,
        private festivalService: FestivalService,
        private routerExtensions: RouterExtensions,
        private _itemService: FestivalService,
        private tabsComponent: TabsComponent
    ) {}

    ngOnInit(): void {
        const id = +this._route.snapshot.params.id;
        // this.items$ = this._itemService.getItems();
        // this.item = this._data.getItem(id);
        this.festivalService.getItem(id).subscribe((item) => {
            this.item = item;
        });

        // this._itemService.getItem(id).subscribe(item => {
        //     this.item = item
        // });
    }

    // navigate back
    onBackTap(): void {
        this._routerExtensions.back();
    }

    // navigate to the page event map
    onMap() {
        this.routerExtensions.navigate(["../festival-map"]);
    }

    // navigate to page match
    // public onMatch() {
    //     this.tabsComponent.tabStrip.nativeElement.selectedIndex = 1;
    //     // this.routerExtension.navigate(["/tabs/default", {outlets: {matchTab: ["match"]}}]);
    // }

        // Going to match page
    // onButtonTap() {
    //     let tabView:TabView = <TabView>this.page.getViewById("tview");
    //     tabView.selectedIndex = 3;
    // }
}
