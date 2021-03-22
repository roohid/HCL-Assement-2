import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
} from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { throwError as observableThrow } from "rxjs";
import { environment } from '../../environments/environment'
@Injectable({ providedIn: "root" })
export class HttpService {
    
  public serviceURL = environment.URL.base;
  
  constructor(private http: HttpClient) { }

  get(url) {
    return this.http
      .get(url)
      .pipe(map(data => { return data; }), catchError(this.handleError));
  }

  getApi(path) {
    return this.http.get(this.serviceURL + path);
  }

  post(url, obj) {
    return this.http
      .post(url, obj)
      .pipe(map(data => {
        console.log(data);
        return data;
      }), catchError(this.handleError));
  }

  postApi(path, obj) {
    return this.post(this.serviceURL + path, obj);
  }
  
  private handleError(err: HttpErrorResponse) {
    let errMsg: string;
    if (err.error instanceof Error) {
      errMsg = `${err.status}-${err.error || ""} ${err.error.message}`;
    } else {
      errMsg = err.error ? err.error : err.toString();
    }
    return observableThrow(errMsg);
  }
}
