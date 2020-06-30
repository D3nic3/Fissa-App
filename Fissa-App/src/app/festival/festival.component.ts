import { Component, OnInit, Directive } from "@angular/core";
import { FestivalService, DataItem } from "./festival.service";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { Observable, combineLatest, of } from "rxjs";

@Component({
    selector: "Festival",
    moduleId: module.id,
    templateUrl: "./festival.component.html",
    styleUrls: ["./festival.component.css"]
})
export class FestivalComponent implements OnInit {
    //  searchbar
    searchPhrase: string;

    // activity indicator
    // isBusy: boolean = true;

    // observable events
    public items$: Observable<DataItem[]>;

    constructor(private _itemService: FestivalService) {}

    //    set up searchbar submit event
    //     onSubmit(args) {
    //         const searchBar = args.object as SearchBar;
    //         // let searchBar = <SearchBar>args.object;
    //         this.onSearch(searchBar.text ? searchBar.text.toLowerCase() : "");
    //         console.log(`Searching for ${searchBar.text}`);
    //         searchBar.dismissSoftInput();
    //     }

    //     onSearch(searchValue) {
    //         if (searchValue !== "") {
    //            this.items$ =  this.items$.filter((item) => {
    //             return (item.evenementNaam && item.beginDatum && item.plaats && item.stad) &&
    //             (item.evenementNaam.toLowerCase().includes(searchValue) ||
    //             item.plaats.toLowerCase().includes(searchValue) ||
    //             item.stad.toLowerCase().includes(searchValue));
    //         });
    //     }
    // }

    // // //     // set up searchbar clear event
    //     onClear(args) {
    //         const searchBar = args.object as SearchBar;
    //         // let searchBar = <SearchBar>args.object;
    //         searchBar.text = "";
    //         searchBar.hint = "Search for a festival";
    // // //         // here function for list items => this is not working well

    // // //         // this.items.forEach(item => {
    // // //         //     this.items.push(item);
    // // //         // });
    //         searchBar.dismissSoftInput();
    //         console.log(`Clear event raised`);
    //     }

    //     onTextChanged(args) {
    //         const searchBar = args.object as SearchBar;
    //         // let searchBar = <SearchBar>args.object;
    //         this.onSearch(searchBar.text ? searchBar.text.toLowerCase() : "");
    //         console.log(`Input changed! New value: ${searchBar.text}`);
    //     }

    // focus off the searchbar when on page
    onSearchLoaded(event) {
        if (event.object.android) {
            event.object.android.setFocusableInTouchMode(true);
        }
    }

    onSearchBarLoaded(event) {
        if (event.object.android) {
            event.object.android.clearFocus();
        }
    }

    // activity indicator
    // onBusyChanged(args: EventData) {
    //     let indicator: ActivityIndicator = <ActivityIndicator>args.object;
    //     console.log("indicator.busy changed to: " + indicator.busy);
    // }

    ngOnInit(): void {
        this.items$ = this._itemService.getItems();
    }
}
