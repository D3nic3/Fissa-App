import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ProfileService {
  private userUrl: string = "http://127.0.0.1:8005/users/1";

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get(this.userUrl);
  }

}

/*function get data events
  getItems(): Observable<ProfileItem> {
    return this.http.get<ProfileItem>(
        this.userUrl
    );
  }

  getUsers(): Observable<Array<User>> {
    return this.http.get(this.userUrl).pipe(map((response: Response) => <Array<User>>HttpResponse.json()));
  }

    private extractData(res: Response) {
    const body = res.json();

    return body.data || { };
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : "Server error";
    console.error(errMsg);

    return Observable.throw(errMsg);
  }

  */
