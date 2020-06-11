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
            "gebruikerID": 6,
            "email": null,
            "gebruikerNaam": "Anusappel",
            "gebruikerVoornaam": null,
            "gebruikerTussenvoegsel": null,

            "gebruikerAchternaam": null,
            "geboorteDatum": null,
            "gebruikerFoto": {
                "fotoID": 1,
                "url": "~/app/images/draadjesvlees.png",
                "naamKenmerk": "vlees",
                "datum": null,
                "alt": "ziek lekker vlees"
            },
            "biografie": "Curabitur interdum vehicula tempor. Aenean sed lacus malesuada, accumsan tellus non, aliquet turpis. Quisque sit amet posuere arcu. Aliquam justo ipsum, luctus in posuere in, sollicitudin ac orci. Duis mollis fringilla mollis. Proin nec elit ultrices, ornare lacus pellentesque, malesuada tortor. Duis et aliquet odio.",
            "drugs": true,
            "alcohol": true,
            "wiet": true,
            "status": true,
            "type": null,
            "geslacht": "m",
            "tijdelijkeAanbevelingsPunten": 0
        },
        {
            "gebruikerID": 7,
            "email": null,
            "gebruikerNaam": "Draadjesvlees",
            "gebruikerVoornaam": null,
            "gebruikerTussenvoegsel": null,
            "gebruikerAchternaam": null,
            "geboorteDatum": null,
            "gebruikerFoto": {
                "fotoID": 1,
                "url": "~/app/images/draadjesvlees.png",
                "naamKenmerk": "vlees",
                "datum": null,
                "alt": "ziek lekker vlees"
            },
            "biografie": "Curabitur interdum vehicula tempor. Aenean sed lacus malesuada, accumsan tellus non, aliquet turpis. Quisque sit amet posuere arcu. Aliquam justo ipsum, luctus in posuere in, sollicitudin ac orci. Duis mollis fringilla mollis. Proin nec elit ultrices, ornare lacus pellentesque, malesuada tortor. Duis et aliquet odio.",
            "drugs": true,
            "alcohol": true,
            "wiet": false,
            "status": true,
            "type": null,
            "geslacht": "v",
            "tijdelijkeAanbevelingsPunten": 0
        },
        {
            "gebruikerID": 8,
            "email": null,
            "gebruikerNaam": "Drollerndraaier",
            "gebruikerVoornaam": null,
            "gebruikerTussenvoegsel": null,
            "gebruikerAchternaam": null,
            "geboorteDatum": null,
            "gebruikerFoto": {
                "fotoID": 2,
                "url": "~/app/images/suddervlees.jpg",
                "naamKenmerk": "lekker sudderen",
                "datum": null,
                "alt": "lekker man"
            },
            "biografie": "Curabitur interdum vehicula tempor. Aenean sed lacus malesuada, accumsan tellus non, aliquet turpis. Quisque sit amet posuere arcu. Aliquam justo ipsum, luctus in posuere in, sollicitudin ac orci. Duis mollis fringilla mollis. Proin nec elit ultrices, ornare lacus pellentesque, malesuada tortor. Duis et aliquet odio.",
            "drugs": true,
            "alcohol": false,
            "wiet": true,
            "status": false,
            "type": null,
            "geslacht": "v",
            "tijdelijkeAanbevelingsPunten": 0
        }
    ];
    private serverUrl = "145.89.207.6:6969/gebruiker/tebeoordelen?gebruikerId=6&evenementId=1";
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

