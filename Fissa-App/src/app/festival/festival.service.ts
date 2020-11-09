import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

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
    // searchPhrase for searchbar
    searchPhrase: string;

    constructor(private http: HttpClient) {}

    // function get data events
    getItems(): Observable<Array<DataItem>> {
        return this.http.get<Array<DataItem>>(
            "http://192.168.2.8:6666/evenement?pageNr=1"
        );
    }
    getItem(evenementID: number): Observable<DataItem> {
        return this.http.get<DataItem>(
            "http://192.168.2.8:6666/evenement?pageNr=1" + evenementID
        );
    }
}
