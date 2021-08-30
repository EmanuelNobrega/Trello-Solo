import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../shared/model/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  user: User;

  constructor(private userService: UserService, private currentRoute: ActivatedRoute, private router: Router) {
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
