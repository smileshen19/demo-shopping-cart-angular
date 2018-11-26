import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  get(url: string) {
    return this.httpClient.get(url);
  }

  post(url: string, body: any) {
    return this.httpClient.post(url, body);
  }

  put(url: string, body: any) {
    return this.httpClient.put(url, body);
  }

  delete(url: string, body?: any) {
    if (!body) {
      return this.httpClient.delete(url);
    }
    // let queryParams = new HttpParams().set('key', value); // key and value are both strings
    // let headerData = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', `Bearer ${accessToken}`);
    return this.httpClient.request('delete', url,
      {
        // headers: headerData,  // optional
        // params: queryParams,  // optional
        body: body,
        // observe: 'response',  // optional
        // responseType: 'response' // default type json ...
      }
    );
  }

}
