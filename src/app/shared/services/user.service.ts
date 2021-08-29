import {Injectable} from '@angular/core';
import {Usuario} from '../model/usuario';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  URL_USUARIOS = 'http://localhost:4200/signup';

  constructor(private httpClient: HttpClient) {
  }

  // listar(): Observable<User[]> {
  //   return this.httpClient.get<Usuario[]>(this.URL_USUARIOS);
  // }

  create(user: User): Observable<User> {
    return this.httpClient.post<User>(this.URL_USUARIOS, user);
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
