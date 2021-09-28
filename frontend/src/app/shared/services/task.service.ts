import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  URL_USERS = 'http://localhost:8080/tasks';

  constructor(private httpClient: HttpClient) {
  }

  list(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.URL_USERS);
  }

  create(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(this.URL_USERS, task);
  }

  remove(id: number): Observable<object> {
    return this.httpClient.delete(`${this.URL_USERS}/${id}`);
  }

  getById(id: number): Observable<Task> {
    return this.httpClient.get<Task>(`${this.URL_USERS}/${id}`);
  }

  atualizar(task: Task): Observable<Task> {
    return this.httpClient.put<Task>(`${this.URL_USERS}/${task.id}`, task);
  }
}
