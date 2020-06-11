import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
    selector: "MatchCard",
    moduleId: module.id,
    templateUrl: "./match-card.component.html",
    styleUrls: ["./match-card.css"]
})
export class MatchCardComponent {
    private response = [
        {
            "id": 1,
            "email": "mallo@mail.com",
            "username": "mallo",
            "firstname": "mallo",
            "lastname": "troum",
            "birthdate": "1997-03-15",
            "picture": null,
            "biography": "Lorem ipsum",
            "drugs": false,
            "alcohol": false,
            "wiet": false,
            "gender": "man",
            "groups": [],
            "messages": [],
            "events": [],
            "tijdelijkeAanbevelingsPunten": 0
        }
    ];
    private serverUrl = "192.168.99.1:8005/user/tebeoordelen?id=6&evenementId=1";
    private personName = "";
    private personBio = ""
    private personIndex = 0;
    private personImg = "";
    private stripeAlcoholOn = "opacity:0;";
    private stripeWeedOn = "opacity:0;";
    private stripeDrugsOn = "opacity:0;";
    private headers = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
    }

    constructor(private http: HttpClient) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.getPeopleToSwipe();
        this.loadNextPerson()
    }

    loadNextPerson() {
        let i = this.personIndex;

        this.personName = this.response[i].username;
        this.personBio = this.response[i].biography;
        this.personImg = this.response[i].picture.url;

        if (!this.response[i].alcohol) {
            this.stripeAlcoholOn = "opacity:1;";
        }
        if (!this.response[i].wiet) {
            this.stripeWeedOn = "opacity:1;";
        }
        if (!this.response[i].drugs) {
            this.stripeDrugsOn = "opacity:1;";
        }

        this.personIndex++;
    }

    getPeopleToSwipe() {
        fetch(this.serverUrl, this.headers)
            .then((response) => response.json()
                .then((r) => {
                    this.response = r;
                }).catch((e) => {
                    console.log(e);
                }));
    }
}

