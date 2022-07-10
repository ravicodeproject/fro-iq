import { HttpClient, HttpContext, HttpEvent, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http: HttpClient) { }

  public get<T>(
    url: string,
    options: {
      headers?: HttpHeaders | { [header: string]: string | string[]; } | undefined;
      observe?: "body";
      context?: HttpContext | undefined;
      params?: HttpParams | { [param: string]: string | string[]; } | undefined;
      reportProgress?: boolean | undefined;
      responseType?: "json" | undefined;
      withCredentials?: boolean | undefined;
    }
  ): Observable<T> {
    return this.http.get<T>(url, options);
  }

  public create<T>(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | { [header: string]: string | string[]; } | undefined;
      observe?: "body";
      context?: HttpContext | undefined;
      params?: HttpParams | { [param: string]: string | string[]; } | undefined;
      reportProgress?: boolean | undefined;
      responseType?: "json" | undefined;
      withCredentials?: boolean | undefined;
    }
  ): Observable<T> {
    return this.http.post<T>(url, body, options);
  }

  public update<T>(
    url: string,
    body: any,
    options: {
      headers?: HttpHeaders | { [header: string]: string | string[]; } | undefined;
      observe?: "body";
      context?: HttpContext | undefined;
      params?: HttpParams | { [param: string]: string | string[]; } | undefined;
      reportProgress?: boolean | undefined;
      responseType?: "json" | undefined;
      withCredentials?: boolean | undefined;
    }
  ):Observable<T> {
    return this.http.put<T>(url, body, options);
  }

  public delete<T>(
    url: string,
    options: {
      headers?: HttpHeaders | { [header: string]: string | string[]; } | undefined;
      observe?: "body";
      context?: HttpContext | undefined;
      params?: HttpParams | { [param: string]: string | string[]; } | undefined;
      reportProgress?: boolean | undefined;
      responseType?: "json" | undefined;
      withCredentials?: boolean | undefined;
    }
  ):Observable<T> {
    return this.http.delete<T>(url, options);
  }
}
