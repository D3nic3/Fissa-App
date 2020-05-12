import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Festival } from "./festival";

@Injectable()
export class FestivalService {
    constructor(private http: HttpClient) { }
    getFestivals(): Observable<Festival[]> {
        return this.http.get<Festival[]>("http://192.168.178.44:8005/users");
    }

    getFestival(id: number): Observable<Festival> {
        return this.http.get<Festival>("http://192.168.178.44:8005/users/" + id);
    }
}
