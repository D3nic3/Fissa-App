import { User } from "./profile";

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
// import { map, catchError } from "rxjs/operators";

@Injectable()
export class ProfileService {
    private userURL: string;

    constructor(private http: HttpClient) {
      this.userURL = "http://192.168.99.1:8005/users/1";
  }

    findAll(): Observable<User> {
        return this.http.get<User>(this.userURL);
    }
}
