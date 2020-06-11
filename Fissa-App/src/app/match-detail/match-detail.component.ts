import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { setInterval, clearInterval } from "tns-core-modules/timer";
import { MatchService } from "./match-service";

@Component({
    selector: "matching-detail",
    templateUrl: "./match-detail.component.html",
    styleUrls: ["./match-detail.css"]
})

export class MatchComponent implements OnInit {
    private response = this.matchservice.getResponse();
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

    constructor(private http: HttpClient, private matchservice: MatchService) {
        // Use the constructor to inject services.
    }

    ngOnInit(): void {
        this.getPeopleToSwipe();
        this.loadNextPerson();
    }

    loadNextPerson() {
        const i = this.personIndex;

        if (this.response.length - 1 === this.personIndex) {
            this.loadPerson(this.personIndex);
            if (!this.morePeople) {
                this.noMorePeopleSignVisibility = "visible";
                this.cardVisibility = "hidden";
            }
            this.morePeople = false;
        } else {
            this.loadPerson(this.personIndex);
            this.personIndex++;
        }

    }

    loadPerson(i) {
        this.personName = this.response[i].gebruikerNaam;
        this.personBio = this.response[i].biografie;
        this.personImg = this.response[i].gebruikerFoto.url;

        if (!this.response[i].alcohol) {
            this.stripeAlcoholOn = "opacity:1;";
        }
        if (!this.response[i].wiet) {
            this.stripeWeedOn = "opacity:1;";
        }
        if (!this.response[i].drugs) {
            this.stripeDrugsOn = "opacity:1;";
        }
    }

    getPeopleToSwipe() {
        fetch("https://145.89.207.254:6969/gebruiker/tebeoordelen?gebruikerId=6&evenementId=" + this.evenementId, {
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
        fetch("https://145.89.207.254:6969/oordeel?isLike=" + String(is_like) + "&beoordelaar=" + String(this.loggedInUserId) + "&beoordeeldeGebruiker=" + String(beoordeelde_gebruiker), {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json"
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

        this.addOordeel(this.response[i].gebruikerID, true);

        const animInterval = setInterval(() => {
            this.opacity = this.animIndex / 100;
            this.showThumb = "opacity:" + String(this.opacity) + ";";

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
        this.addOordeel(this.response[i].gebruikerID, false);
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
