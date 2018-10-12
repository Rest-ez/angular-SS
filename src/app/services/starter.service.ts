import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarterService {

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

   // Change observable to class type - This is for real endpoint (change name of method)
  public getAPI(): Observable<any>{

    const url = environment['nodeAPI']; // change out with URL name in config.json
    console.log(url);
    return this.http.get<any>(url);
  }

  public getToDo(): Observable<any> {

    const url = environment['todos']; // change out with URL name in config.json
    console.log(url);
    return this.http.get<any>(url);
  }

  public postToDo(data: any): Observable<any> {

    const url = environment['todos']; // change out with URL name in config.json
    console.log(url);
    return this.http.get<any>(url);
  }

  // Change observable to class type - this is mock data get (change name of method)
  public getGitHubRepoJSON(): Observable<any>{

    const url = 'assets/dataModelSample.json'; // replace with mock data file
    console.log(url);
    return this.http.get(url);
  }
}
