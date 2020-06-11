import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class MatchService {
    private response = [
        {
            gebruikerID: 6,
            email: null,
            gebruikerNaam: "Henk",
            gebruikerVoornaam: null,
            gebruikerTussenvoegsel: null,
            gebruikerAchternaam: null,
            geboorteDatum: null,
            gebruikerFoto: {
                fotoID: 1,
                url: "~/app/images/Robert.png",
                naamKenmerk: "vlees",
                datum: null,
                alt: "ziek lekker vlees"
            },
            biografie: "Curabitur interdum vehicula tempor. Aenean sed lacus malesuada, accumsan tellus non, aliquet turpis. Quisque sit amet posuere arcu. Aliquam justo ipsum, luctus in posuere in, sollicitudin ac orci. Duis mollis fringilla mollis. Proin nec elit ultrices, ornare lacus pellentesque, malesuada tortor. Duis et aliquet odio.",
            drugs: true,
            alcohol: true,
            wiet: true,
            status: true,
            type: null,
            geslacht: "m",
            tijdelijkeAanbevelingsPunten: 0
        },
        {
            gebruikerID: 7,
            email: null,
            gebruikerNaam: "Bas",
            gebruikerVoornaam: null,
            gebruikerTussenvoegsel: null,
            gebruikerAchternaam: null,
            geboorteDatum: null,
            gebruikerFoto: {
                fotoID: 1,
                url: "~/app/images/Robert.png",
                naamKenmerk: "vlees",
                datum: null,
                alt: "ziek lekker vlees"
            },
            biografie: "Integer in rhoncus enim, vel lacinia enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam pretium enim turpis, sit amet dignissim orci pulvinar maximus. Aliquam tempor faucibus ipsum, at eleifend est fringilla ut.",
            drugs: true,
            alcohol: true,
            wiet: false,
            status: true,
            type: null,
            geslacht: "v",
            tijdelijkeAanbevelingsPunten: 0
        },
        {
            gebruikerID: 8,
            email: null,
            gebruikerNaam: "Ijsbrand",
            gebruikerVoornaam: null,
            gebruikerTussenvoegsel: null,
            gebruikerAchternaam: null,
            geboorteDatum: null,
            gebruikerFoto: {
                fotoID: 4,
                url: "~/app/images/Toby.png",
                naamKenmerk: "boy",
                datum: null,
                alt: "vieze boy"
            },
            biografie: "Curabitur interdum vehicula tempor. Aenean sed lacus malesuada, accumsan tellus non, aliquet turpis. Quisque sit amet posuere arcu. Aliquam justo ipsum, luctus in posuere in, sollicitudin ac orci. Duis mollis fringilla mollis. Proin nec elit ultrices, ornare lacus pellentesque, malesuada tortor. Duis et aliquet odio.",
            drugs: true,
            alcohol: true,
            wiet: false,
            status: false,
            type: null,
            geslacht: "v",
            tijdelijkeAanbevelingsPunten: 0
        },
        {
            gebruikerID: 9,
            email: null,
            gebruikerNaam: "Zoutlikker",
            gebruikerVoornaam: null,
            gebruikerTussenvoegsel: null,
            gebruikerAchternaam: null,
            geboorteDatum: null,
            gebruikerFoto: {
                fotoID: 2,
                url: "~/app/images/Emmy.png",
                naamKenmerk: "lekker sudderen",
                datum: null,
                alt: "lekker man"
            },
            biografie: "Integer in rhoncus enim, vel lacinia enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam pretium enim turpis, sit amet dignissim orci pulvinar maximus. Aliquam tempor faucibus ipsum, at eleifend est fringilla ut.",
            drugs: false,
            alcohol: false,
            wiet: true,
            status: true,
            type: null,
            geslacht: "m",
            tijdelijkeAanbevelingsPunten: 0
        },
        {
            gebruikerID: 10,
            email: null,
            gebruikerNaam: "Alex",
            gebruikerVoornaam: null,
            gebruikerTussenvoegsel: null,
            gebruikerAchternaam: null,
            geboorteDatum: null,
            gebruikerFoto: {
                fotoID: 2,
                url: "~/app/images/Emmy.png",
                naamKenmerk: "lekker sudderen",
                datum: null,
                alt: "lekker man"
            },
            biografie: "Curabitur interdum vehicula tempor. Aenean sed lacus malesuada, accumsan tellus non, aliquet turpis. Quisque sit amet posuere arcu. Aliquam justo ipsum, luctus in posuere in, sollicitudin ac orci. Duis mollis fringilla mollis. Proin nec elit ultrices, ornare lacus pellentesque, malesuada tortor. Duis et aliquet odio.",
            drugs: true,
            alcohol: true,
            wiet: true,
            status: true,
            type: null,
            geslacht: "m",
            tijdelijkeAanbevelingsPunten: 0
        }
    ];

    getResponse() {
        return this.response;
    }
}
