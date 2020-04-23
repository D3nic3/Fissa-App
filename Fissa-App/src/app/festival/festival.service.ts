import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import { Festival } from "./festival";

@Injectable()
export class FestivalService {
    private festivalsUrl: string;

    constructor(private http: HttpClient) {
        this.festivalsUrl = "http://localhost:6666/evenement?pageNr=1";
    }

    public findAll(): Observable<Festival[]> {
        return this.http.get<Festival[]>(this.festivalsUrl);
    }
}
