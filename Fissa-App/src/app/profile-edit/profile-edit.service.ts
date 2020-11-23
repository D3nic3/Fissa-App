import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class ProfileEditService {
    private userURL: string;

    constructor(private http: HttpClient) {
      this.userURL = "http://192.168.99.1:8005/users/2";
  }

}
