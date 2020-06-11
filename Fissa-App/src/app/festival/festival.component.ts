import { Component, OnInit } from "@angular/core";
import { FestivalService, DataItem } from "./festival.service";
// import { Observable, PropertyChangeData } from "tns-core-modules/data/observable";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { Page } from "tns-core-modules/ui/page";
import { ModalDialogService } from "nativescript-angular";
import { Observable } from "rxjs";
import { ObservableArray } from "tns-core-modules/data/observable-array";
// import { DataService, DataItem } from "../shared/data.service";
import { isAndroid } from "tns-core-modules/platform";

@Component({
    selector: "Festival",
    templateUrl: "./festival.component.html",
    styleUrls: ["./festival.component.css"]
})
export class FestivalComponent implements OnInit {
    //  searchbar
    searchPhrase: string;

    // observable http
    public items$: Observable<DataItem[]>;

    constructor(private _itemService: FestivalService) {
    }

    // set up searchbar submit event
    // onSubmit(args) {
    //     // const searchBar = args.object as SearchBar;
    //     let searchBar = <SearchBar>args.object;
    //     this.onSearch(searchBar.text ? searchBar.text.toLowerCase() : "");
    //     console.log(`Searching for ${searchBar.text}`);
    //     searchBar.dismissSoftInput();
    // }

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

    // set up searchbar clear event
    onClear(args) {
        // const searchBar = args.object as SearchBar;
        let searchBar = <SearchBar>args.object;
        searchBar.text = "";
        searchBar.hint = "Search for a festival";
        // here function for list items => this is not working well

        // this.items.forEach(item => {
        //     this.items.push(item);
        // });
        searchBar.dismissSoftInput();
        console.log(`Clear event raised`);
    }

    // onTextChanged(args) {
    //     // const searchBar = args.object as SearchBar;
    //     let searchBar = <SearchBar>args.object;
    //     this.onSearch(searchBar.text ? searchBar.text.toLowerCase() : "");
    //     console.log(`Input changed! New value: ${searchBar.text}`);
    // }

    ngOnInit(): void {
        this.items$ = this._itemService.getItems();
    }
}

// hardcoded

    // items: Array<DataItem>; //  data festivalservice



    // // items Festivalservice
    // constructor(private _itemService: FestivalService) {

        //dezeniet
        // this.items.filter((item) => {
        //     return (item) && item.evenementNaam;
        // });
    //  }



    // ngOnInit(): void {
    //     this.items = this._itemService.getItems();

    // }
// }
