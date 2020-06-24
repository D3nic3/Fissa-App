import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { RouterExtensions } from "nativescript-angular/router";
import { alert } from "tns-core-modules/ui/dialogs";

@Component({
    selector: "Welcome",
    moduleId: module.id,
    templateUrl: "./welcome.component.html",
    styleUrls: ["./welcome.component.css"],
})
export class WelcomeComponent implements OnInit {
    // constructor(private location: Location) {}
    constructor(private routerExtension: RouterExtensions) {}

    ngOnInit(): void {}

    // goBack(): void {
    //     this.location.back();
    // }

    onLogin() {
        this.routerExtension.navigate(["../login"], { clearHistory: true });
    }

    onSignin() {
        this.routerExtension.navigate(["../sign-up"]);
    }

    alert() {
        alert({
            title: "Terms of services",
            message: `Fissa One, gevestigd aan Triangelstraat 76, is verantwoordelijk voor de verwerking van persoonsgegevens zoals weergegeven in deze privacyverklaring.

Contactgegevens:
https://fissaofficial.com/
Triangelstraat 76
0630012930
Florian Korzelius is de Functionaris Gegevensbescherming van Fissa One. Hij is te bereiken via FKorzelius@fissaofficial.com

Persoonsgegevens die wij verwerken
Fissa One verwerkt je persoonsgegevens doordat je gebruik maakt van onze diensten en/of omdat je deze gegevens zelf aan ons verstrekt.

Hieronder vind je een overzicht van de persoonsgegevens die wij verwerken
    - Voor- en achternaam
    - Geslacht
    - Geboortedatum
    - Geboorteplaats
    - Telefoonnummer
    - E-mailadres
    - IP-adres"
    - Overige persoonsgegevens die je actief verstrekt bijvoorbeeld door een profiel op deze Applicatie aan te maken, in correspondentie en telefonisch
    - Locatiegegevens
    - Gegevens over jouw surfgedrag over verschillende Applicaties heen (bijvoorbeeld omdat dit bedrijf onderdeel is van een advertentienetwerk)
    - Internetbrowser en apparaat type

Bijzondere en/of gevoelige persoonsgegevens die wij verwerken
Onze Applicatie en/of dienst heeft niet de intentie gegevens te verzamelen over Applicatie Bezoekers die jonger zijn dan 16 jaar. Tenzij ze toestemming hebben van ouders of voogd. We kunnen echter niet controleren of een bezoeker ouder dan 16 is. Wij raden ouders dan ook aan betrokken te zijn bij de online activiteiten van hun kinderen, om zo te voorkomen dat er gegevens over kinderen verzameld worden zonder ouderlijke toestemming. Als je er van overtuigd bent dat wij zonder die toestemming persoonlijke gegevens hebben verzameld over een minderjarige, neem dan contact met ons op via FKorzelius@fissaofficial.com, dan verwijderen wij deze informatie.

Met welk doel en op basis van welke grondslag wij persoonsgegevens verwerken
Fissa One verwerkt jouw persoonsgegevens voor de volgende doelen:
    - Verzenden van onze nieuwsbrief en/of reclamefolder
    - Je te kunnen bellen of e-mailen indien dit nodig is om onze dienstverlening uit te kunnen voeren
    - Je te informeren over wijzigingen van onze diensten en producten
    - Je de mogelijkheid te bieden een account aan te maken
    - Fissa One analyseert jouw gedrag op de Applicatie om daarmee de Applicatie te verbeteren en het aanbod van producten en diensten af te stemmen op jouw voorkeuren.

Geautomatiseerde besluitvorming
Fissa One neemt niet op basis van geautomatiseerde verwerkingen besluiten over zaken die (aanzienlijke) gevolgen kunnen hebben voor personen. Het gaat hier om besluiten die worden genomen door computerprogramma's of -systemen, zonder dat daar een mens (bijvoorbeeld een medewerker van Fissa One) tussen zit.

Hoe lang we persoonsgegevens bewaren

Fissa One bewaart je persoonsgegevens niet langer dan strikt nodig is om de doelen te realiseren waarvoor je gegevens worden verzameld. Wij hanteren de volgende bewaartermijnen voor de volgende (categorieën) van persoonsgegevens:

//tabel!
Persoonsgegevenns
    - Voor-en achternaam
    - Geslacht
    - Geboortedatum
    - Telefoonnummer
    - E-mailadres
    - IP-adres
    - Overige gegevens die actief verstrekt bijvoorbeeld door een profiel op deze applicatie aan te maken, in correspondentie en telefonisch
    - Locatiegegevens
    - Gegevens over jouw surfgedrag over verschillende applicaties heen (bijvoorbeeld omdat dit bedrijf onderdeel is van een advertentienetwerk)
    - Internet Browser en apparaat type

Delen van persoonsgegevens met derden

Fissa One deelt jouw persoonsgegevens met verschillende derden als dit noodzakelijk is voor het uitvoeren van de overeenkomst en om te voldoen aan een eventuele wettelijke verplichting. Met bedrijven die je gegevens verwerken in onze opdracht, sluiten wij een bewerkersovereenkomst om te zorgen voor eenzelfde niveau van beveiliging en vertrouwelijkheid van jouw gegevens. Fissa One blijft verantwoordelijk voor deze verwerkingen. Daarnaast verstrekt Fissa One jouw persoonsgegevens aan andere derden. Dit doen wij alleen met jouw nadrukkelijke toestemming.

Alleen ping one

Je hebt het recht om je persoonsgegevens in te zien, te corrigeren of te verwijderen. Dit kun je zelf doen via de persoonlijke instellingen van jouw account. Daarnaast heb je het recht om je eventuele toestemming voor de gegevensverwerking in te trekken of bezwaar te maken tegen de verwerking van jouw persoonsgegevens door ons bedrijf en heb je het recht op gegevensoverdraagbaarheid. Dat betekent dat je bij ons een verzoek kan indienen om de persoonsgegevens die wij van jou beschikken in een computerbestand naar jou of een ander, door jou genoemde organisatie, te sturen.

Wil je gebruik maken van je recht op bezwaar en/of recht op gegevensoverdraagbaarheid of heb je andere vragen/opmerkingen over de gegevensverwerking, stuur dan een gespecificeerd verzoek naar FKorzelius@fissaofficial.com.

Om er zeker van te zijn dat het verzoek tot inzage door jou is gedaan, vragen wij jou een kopie van je identiteitsbewijs bij het verzoek mee te sturen. Maak in deze kopie je pasfoto, MRZ (machine readable zone, de strook met nummers onderaan het paspoort), paspoortnummer en Burgerservicenummer (BSN) zwart. Dit ter bescherming van je privacy. Fissa One zal zo snel mogelijk, maar in ieder geval binnen vier weken, op jouw verzoek reageren.

Fissa One wil je er tevens op wijzen dat je de mogelijkheid hebt om een klacht in te dienen bij de nationale toezichthouder, de Autoriteit Persoonsgegevens. Dat kan via de volgende link: https://autoriteitpersoonsgegevens.nl/nl/contact-met-de-autoriteit-persoonsgegevens/tip-ons

Hoe wij persoonsgegevens beveiligen
Fissa One neemt de bescherming van jouw gegevens serieus en neemt passende maatregelen om misbruik, verlies, onbevoegde toegang, ongewenste openbaarmaking en ongeoorloofde wijziging tegen te gaan. Als jij het idee hebt dat jouw gegevens toch niet goed beveiligd zijn of er aanwijzingen zijn van misbruik, neem dan contact op met onze klantenservice of via FKorzelius@fissaofficial.com.
`,
            okButtonText: "Ok",
            cancelable: false,
        }).then(() => {
            console.log("The user closed the terms of services.");
        });
    }
}
