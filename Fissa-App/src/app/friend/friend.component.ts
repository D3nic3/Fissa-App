import { Component, OnInit } from "@angular/core";
import { FriendService, FriendItem } from "./friend.service";

@Component({
    selector: "Friend",
    templateUrl: "./friend.component.html",
    styleUrls: ["./friend.component.css"]
})
export class FriendComponent implements OnInit {
    items: Array<FriendItem>;
    constructor(private _itemService: FriendService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
        this.items = this._itemService.getFriends();
    }

}
