import { Component, OnInit } from '@angular/core';
import { UsuarioFirestoreService } from '../../shared/services/usuario-firestore.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../shared/model/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  user: User;

  constructor(private userService: UsuarioFirestoreService, private currentRoute: ActivatedRoute, private router: Router) {
    this.user = new User();
  }

  ngOnInit(): void {

  }

  insertUser(): void {
    this.userService.create(this.user).subscribe(
      ret => {
        // navega para a página inicial após cadastro bem sucedido
        this.router.navigate(['/'])
      }
    )
  }

}
