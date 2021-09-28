import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/model/user';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  user: User;
  senha_rep: string;

  constructor(private userService: UserService, private router: Router) {
    this.user = new User();
    this.senha_rep = "";
  }

  ngOnInit(): void {

  }

  insertUser(): void {

    console.log(this.user)

    if (this.user.nome == "" || this.user.nome == null ) {
        alert("Solicitação incompleta, nome não informado");
    } else if (this.user.login == "" || this.user.login == null) {
      alert("Solicitação incompleta, Login não informado");
    } else if (this.user.email == "" || this.user.email == null) {
      alert("Solicitação incompleta, Email não informado");
    } else if (this.user.senha == "" || this.user.senha == null) {
        alert("Solicitação incompleta, Senha não informada");
    } else if (this.user.senha != this.senha_rep) {
        alert("Solicitação incompleta, As senhas informadas diferem");
    } else {
      this.userService.create(this.user).subscribe(
        ret => {
          // navega para a página inicial após cadastro bem sucedido
          this.router.navigate(['/'])
        }
      )
    }
  }
}
