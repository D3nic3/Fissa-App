import { ProfileItem } from "./profile";

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ProfileService {
  private userUrl: string = "http://127.0.0.1:8005/users/1";

  constructor(private http: HttpClient) {
  }

  // function get data events
  getItems(): Observable<ProfileItem> {
    return this.http.get<ProfileItem>(
        this.userUrl
    );
  }
}
