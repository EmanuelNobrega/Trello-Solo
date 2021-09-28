import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  URL_USERS = 'http://localhost:8080/users';

  constructor(private httpClient: HttpClient) {
  }

  list(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.URL_USERS);
  }

  create(user: User): Observable<User> {
    return this.httpClient.post<User>(this.URL_USERS, user);
  }

  remove(id: number): Observable<object> {
    return this.httpClient.delete(`${this.URL_USERS}/${id}`);
  }

  getById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.URL_USERS}/${id}`);
  }

  atualizar(user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.URL_USERS}/${user.id}`, user);
  }
}
