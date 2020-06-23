import { Component, OnInit, Directive } from "@angular/core";
import { FestivalService, DataItem } from "./festival.service";
// import { Observable, PropertyChangeData } from "tns-core-modules/data/observable";
import { SearchBar } from "tns-core-modules/ui/search-bar";
// import { Page, isIOS } from "tns-core-modules/ui/page";
import { ModalDialogService } from "nativescript-angular";
import { Observable, combineLatest, of } from "rxjs";
import { ObservableArray } from "tns-core-modules/data/observable-array";
// import { DataService, DataItem } from "../shared/data.service";
import { isAndroid } from "tns-core-modules/platform";
import { FormControl } from "@angular/forms";
import {map, startWith} from 'rxjs/operators';
import { Page } from "tns-core-modules/ui/page";
import { topmost } from "tns-core-modules/ui/frame";

@Component({
    selector: "Festival",
    templateUrl: "./festival.component.html",
    styleUrls: ["./festival.component.css"]
})

export class FestivalComponent implements OnInit {
    //  searchbar
    searchPhrase: string;
    isBusy: boolean = true;

    // observable http
    public items$: Observable<DataItem[]>;

     //test filter
     filteredItems$: Observable<DataItem[]>;
     filter: FormControl;
     filter$: Observable<string>;

    constructor(private _itemService: FestivalService) {


        //test filter
        // this.items$ = of();
        this.filter = new FormControl('');
        this.filter$ = this.filter.valueChanges.pipe(startWith(''));
        this.filteredItems$ = combineLatest(this.items$, this.filter$).pipe(
            map(([item, filterString]) => item.filter
            (item => item.evenementNaam.toLowerCase().indexOf
            (filterString.toLowerCase()) !== -1))
        );
     }




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

// //     // set up searchbar clear event
//     onClear(args) {
//         const searchBar = args.object as SearchBar;
//         // let searchBar = <SearchBar>args.object;
//         searchBar.text = "";
//         searchBar.hint = "Search for a festival";
// //         // here function for list items => this is not working well

// //         // this.items.forEach(item => {
// //         //     this.items.push(item);
// //         // });
//         searchBar.dismissSoftInput();
//         console.log(`Clear event raised`);
//     }

//     onTextChanged(args) {
//         const searchBar = args.object as SearchBar;
//         // let searchBar = <SearchBar>args.object;
//         this.onSearch(searchBar.text ? searchBar.text.toLowerCase() : "");
//         console.log(`Input changed! New value: ${searchBar.text}`);
//     }

    //activity indicator
    // onBusyChanged(args: EventData) {
    //     let indicator: ActivityIndicator = <ActivityIndicator>args.object;
    //     console.log("indicator.busy changed to: " + indicator.busy);
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
