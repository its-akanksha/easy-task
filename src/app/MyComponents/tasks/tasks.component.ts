import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { NewTaskComponent } from "../new-task/new-task.component";
import { type NewTaskData } from '../task/task.model';
import { TasksService } from './tasks.service'; 

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;  
  isAddingTask=false;

  constructor (private tasksService: TasksService){}

  get selectUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id:string){
    this.tasksService.removeTask(id);
  }

  onStartAddTask(){
    this.isAddingTask=true;
  }

  onCloseTask(){
    this.isAddingTask=false;
  }

  onAddTask(taskdata: NewTaskData){
    this.tasksService.addTask(taskdata, this.userId);
    this.isAddingTask=false;
  }

}
