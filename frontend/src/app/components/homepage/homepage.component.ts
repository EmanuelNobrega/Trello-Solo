import { Component, OnInit } from '@angular/core';
import { UsuarioFirestoreService } from '../../shared/services/usuario-firestore.service';
import { Router } from '@angular/router';
import { User } from '../../shared/model/user';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  users: Array<User> = [];

  constructor(private usrService: UsuarioFirestoreService, private roteador: Router) {}

  ngOnInit(): void {
    this.usrService.list().subscribe((users: User[]) => (this.users = users));
  }
}
