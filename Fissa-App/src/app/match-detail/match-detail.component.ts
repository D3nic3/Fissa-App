import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { setInterval, clearInterval } from "tns-core-modules/timer";
// import { MatchService } from "./match-service";

@Component({
    selector: "match-detail",
    templateUrl: "./match-detail.component.html",
    styleUrls: ["./match-detail.css"]
})

export class MatchComponent implements OnInit {
    private response;
    private loggedInUserId = 1;
    private evenementId = 1;
    private personName = "";
    private personBio = "";
    private personIndex = 0;
    private personImg = "";
    private stripeAlcoholOn = "opacity:0;";
    private stripeWeedOn = "opacity:0;";
    private stripeDrugsOn = "opacity:0;";
    private cardStyle = "animation-name:none;opacity:1;";
    private opacity = 0;
    private animIndex = 0;
    private showThumb = "opacity:0;";
    private noMorePeopleSignVisibility = "hidden";
    private cardVisibility = "visible";
    private morePeople = true;

    constructor(private http: HttpClient) {
        // Use the constructor to inject services.
    }

    ngOnInit(): void {
        this.getPeopleToSwipe();
        this.loadPerson();
    }

    loadNextPerson() {
        // const i = this.personIndex;
        
        if(this.response.length > 0) {
            this.response.splice(0,1);
            this.loadPerson();
        } else {
            this.noMorePeopleSignVisibility = "visible";
            this.cardVisibility = "hidden";
        }

        // if (this.response.length - 1 === this.personIndex) {
        //     this.loadPerson(this.personIndex);
        //     if (!this.morePeople) {
        //         this.noMorePeopleSignVisibility = "visible";
        //         this.cardVisibility = "hidden";
        //     }
        //     this.morePeople = false;
        // } else {
        //     // this.loadPerson(this.personIndex);
        //     this.personIndex++;
        // }

    }

    loadPerson() {
        this.personName = this.response[0].username;
        this.personBio = this.response[0].biography;
        this.personImg = this.response[0].picture.url;

        if (!this.response[0].alcohol) {
            this.stripeAlcoholOn = "opacity:1;";
        }
        if (!this.response[0].wiet) {
            this.stripeWeedOn = "opacity:1;";
        }
        if (!this.response[0].drugs) {
            this.stripeDrugsOn = "opacity:1;";
        }
    }

    getPeopleToSwipe() {
        fetch("http://192.168.99.1:8005/users/1/events/" + this.evenementId, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json"
            })
        })
            .then((response) => response.json()
                .then((r) => {
                    this.response = r;
                }).catch((e) => {
                    console.log(e);
                }));
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
        const i = this.personIndex;
        this.showThumb = "opacity:1;";
        this.animIndex = 100;

        this.addOordeel(this.response[i].id, true);

        const animInterval = setInterval(() => {
            // this.opacity = this.animIndex / 100;
            // this.showThumb = "opacity:" + String(this.opacity) + ";";

            this.animIndex -= 5;
            if (this.animIndex == 0) {
                this.doSwipe();

                this.showThumb = "opacity:0;";
                this.animIndex = 0;

                clearInterval(animInterval);
            }
        }, 1);
        animInterval;
    }

    dislikePerson() {
        const i = this.personIndex;
        this.addOordeel(this.response[i].id, false);
        this.doSwipe();
    }

    doSwipe() {
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
