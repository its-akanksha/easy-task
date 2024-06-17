import { Component, Input, inject} from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from "../../Shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks/tasks.service';

@Component({
    selector: 'app-task',
    standalone: true,
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
    imports: [CardComponent, DatePipe]
})
export class TaskComponent {
  @Input() task!: Task;
  private tasksService = inject(TasksService);

  onCompleteTask(){
    this.tasksService.removeTask(this.task.id);
  }

}
