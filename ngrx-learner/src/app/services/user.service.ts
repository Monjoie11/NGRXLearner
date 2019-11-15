import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { IUserHttp } from '../models/http-models/user-http.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersURL = `${environment.apiUrl}users.json`;

  constructor(private _http: HttpClient) { }

  getUsers(): Observable<IUserHttp> {

    this._http.get<IUserHttp>(this.usersURL);
  }
}
