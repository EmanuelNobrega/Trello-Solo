import { Component, OnInit } from '@angular/core';
import { Task } from '../../shared/model/task';
import { TaskService } from '../../shared/services/task.service';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/model/user';

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.scss']
})
export class CreatetaskComponent implements OnInit {

  task: Task;
  users: Array<User> = []; 

  constructor(
    private taskService: TaskService, 
    private usrService: UserService, 
    private router: Router
  ) {
    this.task = new Task();
  }

  ngOnInit(): void {
    this.usrService.list().subscribe((users: User[]) => (this.users = users));
  }

  insertTask(): void {

    if (this.task.nome == "" || this.task.nome == null ) {
        alert("Solicitação incompleta, nome não informado");
    } else if (this.task.user_id == null) {
      alert("Solicitação incompleta, Usuário não selecionado");
    } else if (this.task.tarefa == "" || this.task.tarefa == null) {
      alert("Solicitação incompleta, Tarefa não informada");
    } else if (this.task.vencimento == null) {
        alert("Solicitação incompleta, Data de vencimento da tarefa não informada ");
    } else {
      console.log(this.task);
      this.taskService.create(this.task).subscribe(
        ret => {
          // navega para a página inicial após cadastro bem sucedido
          this.router.navigate(['/'])
        }
      )
    }
  }

}
