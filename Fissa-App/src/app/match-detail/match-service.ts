import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";

export interface DataItem {
    userID: number;
    email: string;
    username: string;
    firstname: string;
    lastname: string;
    birthdate: string;
    picture: string;
    biography: string;
    drugs: string;
    alcohol: string;
    wiet: string;
    gender: string;
    
}

@Injectable({
    providedIn: "root"
})
export class MatchService {
    constructor(private http: HttpClient) {
    }

    //Alle mensen behalve jezelf die naar die evenement gaan --User moet nog de ingelogde gebruiker worden en events moet nog de evenement waar je naar toe gaat worden
    getItems(): Observable<DataItem[]> {
         return this.http.get<DataItem[]>("http://192.168.99.1:8005/users/1/events/1");
            }

    //De persoon die je mag gaan oordelen
    getItem(userID: number): Observable<DataItem> {
        return this.http.get<DataItem>("http://192.168.99.1:8005/users/" + userID);
            }
    
}

