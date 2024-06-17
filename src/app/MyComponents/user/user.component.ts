import { Component, EventEmitter, Input, Output} from '@angular/core';
import { CardComponent } from "../../Shared/card/card.component";
// import { DUMMY_USERS } from '../../dummy.users';
// // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: [CardComponent]
})
export class UserComponent {
  @Input({required:true}) id !: string;
  @Input({required:true}) avatar!:string;
  @Input({required:true}) name!:string;
  @Output() select = new EventEmitter<string>();
  @Input({required: true}) selected !: boolean;
  // avatar = input.required<string>(); //getting input through signals
  // name = input.required<string>();

  get imagePath(){
    return "assets/users/" + this.avatar;
  }
  onSelectUser(){
    this.select.emit(this.id);
  }
}
