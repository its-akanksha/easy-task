import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './MyComponents/header/header.component';
import { UserComponent } from "./MyComponents/user/user.component";
import { DUMMY_USERS } from './dummy.users';
import { TasksComponent } from "./MyComponents/tasks/tasks.component";
import { TaskComponent } from './MyComponents/task/task.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent, TaskComponent]
})
export class AppComponent {
  title = 'easy-task';
  users = DUMMY_USERS;
  selectedUserId !: string;

  onSelectUser(id:string){
    this.selectedUserId= id;
  }

  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId );
  }

}
