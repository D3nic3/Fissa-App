import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";

export interface DataItem {
    evenementID: number;
    evenementNaam: string;
    beginDatum: string;
    eindDatum: string;
    status: string;
    plaats: string;
    stad: string;
}

@Injectable({
    providedIn: "root"
})
export class FestivalService {
    searchPhrase: string;

    // observable
    // constructor(private http: HttpClient) {
    // }

    // getItems(): Observable<DataItem[]> {
    // return this.http.get<DataItem[]>("http://192.168.2.5:6666/evenement?pageNr=1");
    //     }
    // getItem(evenementID: number): Observable<DataItem> {
    //     return this.http.get<DataItem>("http://192.168.2.5:6666/evenement?pageNr=1" + evenementID);
    // // }
    // }

    // hard coded
    private items = new Array<DataItem>(
        {
            evenementID: 37371984,
            evenementNaam : "Sam Baker at TivoliVredenburg (January 22, 2020)",
            beginDatum: "2020-01-21T23:00:00.000+0000",
            eindDatum: null,
            status: "ok",
            plaats: "TivoliVredenburg",
            stad: "Utrecht, Netherlands"
        },
        {
            evenementID: 38182274,
            evenementNaam: "Angela Groothuizen at TivoliVredenburg (January 23, 2020)",
            beginDatum: "2020-01-22T23:00:00.000+0000",
            eindDatum: null,
            status: "ok",
            plaats: "TivoliVredenburg",
            stad: "Utrecht, Netherlands"
        },
        {
            evenementID: 39293630,
            evenementNaam: "Popquiz (NL) at TivoliVredenburg (January 23, 2020)",
            beginDatum: "2020-01-22T23:00:00.000+0000",
            eindDatum: null,
            status: "ok",
            plaats: "TivoliVredenburg",
            stad: "Utrecht, Netherlands"
        },
        {
            evenementID: 39364321,
            evenementNaam: "Kraak & Smaak at TivoliVredenburg (January 23, 2020)",
            beginDatum: "2020-01-22T23:00:00.000+0000",
            eindDatum: null,
            status: "ok",
            plaats: "TivoliVredenburg",
            stad: "Utrecht, Netherlands"
        },
        {
            evenementID: 38913029,
            evenementNaam: "Tim Akkerman and Ivy League at De Helling (January 24, 2020)",
            beginDatum: "2020-01-23T23:00:00.000+0000",
            eindDatum: null,
            status: "ok",
            plaats: "De Helling",
            stad: "Utrecht, Netherlands"}
    );

    getItems(): Array<DataItem> {
        return this.items;
    }

    getItem(id: number): DataItem {
        return this.items.filter((item) => item.evenementID === id)[0];
    }
}
