import { Injectable } from "@angular/core";

import {Festival} from "./festival";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class FestivalService{
    constructor(private http: HttpClient){}
    getFestivals():Observable<Object[]>{
        return this.http.get<Object[]>("192.168.99.1:8005/users/");
    }

    getFestival(id: number): Observable<Object>{
        return this.http.get<Object>("http://192.168.99.1:8005/users/3");
    }



}
