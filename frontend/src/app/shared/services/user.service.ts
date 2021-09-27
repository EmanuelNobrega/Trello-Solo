import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  URL_USERS = 'http://localhost:3000/users';
  URL_TASKS = 'http://localhost:3000/tasks'

  constructor(private httpClient: HttpClient) {
  }

  list(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.URL_USERS);
  }

  create(user: User): Observable<User> {
    return this.httpClient.post<User>(this.URL_USERS, user);
  }

  // remover(id: number): Observable<object> {
  //   return this.httpClient.delete(`${this.URL_USUARIOS}/${id}`);
  // }

  // pesquisarPorId(id: number): Observable<Usuario> {
  //   return this.httpClient.get<Usuario>(`${this.URL_USUARIOS}/${id}`);
  // }

  // atualizar(usuario: Usuario): Observable<Usuario> {
  //   return this.httpClient.put<Usuario>(`${this.URL_USUARIOS}/${usuario.id}`, usuario);
  // }
}
