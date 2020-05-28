import { Injectable } from "@angular/core";

export interface FriendItem {
    friendID: number;
    nickname: string;
}

@Injectable({
    providedIn: "root"
})

export class FriendService {

private items = new Array<FriendItem>(
    {
        friendID: 123456,
        nickname: "Gert-Jan"
    },
    {
        friendID: 654321,
        nickname: "Bertha"
    },
    {
        friendID: 213456,
        nickname: "Annemiek"
    },
    {
        friendID: 456731,
        nickname: "Rosalie"
    }

);

getFriends(): Array<FriendItem> {
    return this.items;
}

getFriend(id: number): FriendItem {
    return this.items.filter((item) => item.friendID === id)[0];
}
}
