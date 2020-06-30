import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { setInterval, clearInterval } from "tns-core-modules/timer";
import { Page, idProperty } from "tns-core-modules/ui/page";
import { ModalDialogService } from "nativescript-angular";
import { Observable } from "rxjs";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { MatchService, DataItem } from "./match-service";

@Component({
    selector: "match-detail",
    templateUrl: "./match-detail.component.html",
    styleUrls: ["./match-detail.css"]
})

export class MatchComponent implements OnInit {

    public items$: Observable<DataItem[]>;
    public item: DataItem;

    // private response;
    private loggedInUserId = 1;
    // private evenementId = 1;
    // private personName = "";
    // private personBio = "";
    private personIndex = 1;
    // private personImg = "";
    private stripeAlcoholOn = "opacity:0;";
    private stripeWeedOn = "opacity:0;";
    private stripeDrugsOn = "opacity:0;";
    private cardStyle = "animation-name:none;opacity:1;";
    private opacity = 0;
    private animIndex = 0;
    // private showThumb = "opacity:0;";
    private noMorePeopleSignVisibility = "hidden";
    private cardVisibility = "visible";
    private morePeople = true;

    constructor(
        private _itemService: MatchService,
        ) {
    }

    ngOnInit(): void {
        this.items$ = this._itemService.getItems();
        // this.getPeopleToSwipe();
        this.loadNextPerson();
    }

    loadNextPerson() {
     

        if(this.morePeople == true){
        this.personIndex++;

       
        this._itemService.getItem(this.personIndex).subscribe(item => {                    // observable
            this.item = item;

            // if(this.item.username == null){
            //      this.noMorePeopleSignVisibility = "visible";
            //      this.cardVisibility = "hidden";

            // }
              if (!this.item.alcohol) {
            this.stripeAlcoholOn = "opacity:1;";
        }
        if (!this.item.wiet) {
            this.stripeWeedOn = "opacity:1;";
        }
        if (!this.item.drugs) {
            this.stripeDrugsOn = "opacity:1;";
        }
        });
    }

    }

    addOordeel(beoordeelde_gebruiker, is_like) {
        fetch("http://192.168.99.1:8005/oordeels/", {
            method: "POST",
            headers: new Headers({
                'Accept': 'application/json',
                
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(
                {
                    "isLike": is_like,
                    "beoordelaar": this.loggedInUserId,
                    "beoordeeldeGebruiker": beoordeelde_gebruiker
                })
        })
            .then((response) => response.json()
                .then((r) => {
                }).catch((e) => {
                    console.log(e);
                }));
    }

    likePerson() {
        // const i = this.personIndex;
        // this.showThumb = "opacity:1;";
        // this.animIndex = 100;

        this.addOordeel(this.personIndex, true);
        this.doSwipe();

        // const animInterval = setInterval(() => {
        //     this.opacity = this.animIndex / 100;
        //     this.showThumb = "opacity:" + String(this.opacity) + ";";

        //     this.animIndex -= 5;
        //     if (this.animIndex == 0) {
        //         this.doSwipe();

        //         this.showThumb = "opacity:0;";
        //         this.animIndex = 0;

        //         clearInterval(animInterval);
        //     }
        // }, 1);
        // animInterval;
    }

    dislikePerson() {
        // const i = this.personIndex;
        this.addOordeel(this.personIndex, false);
        this.doSwipe();
    }

    doSwipe() {
        // this.loadNextPerson();
        this.cardStyle = "transform: translate(0, 0);";
        this.animIndex = 0;

        const animInterval = setInterval(() => {
            this.opacity = this.animIndex / 100;
            this.cardStyle = "transform: translate(" + String(this.animIndex * 4) + ", 0);" +
                "opacity:" + String(this.opacity) + ";";

            this.animIndex += 10;
            if (this.animIndex == 100) {
                this.loadNextPerson();

                this.cardStyle = "transform: translate(0, 0);";
                this.animIndex = 0;

                clearInterval(animInterval);
            }
        }, 1);
        animInterval;
    }
}

