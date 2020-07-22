import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

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

export class ProfileService {
  constructor(private http: HttpClient) {}

  // function get data events
  getItems(): Observable<Array<DataItem>> {
    return this.http.get<Array<DataItem>>(
      "http://192.168.178.111:8005/users/1"
    );
  }
}
