import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})

export class ControllerComponent {
  @Output() messageFromchild = new EventEmitter<string>();

  message_to_parent = "Hello parent! :)";

  buttons: string[]  = ["%", "CE", "AC", "/", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2","3","+", " ", "0", ".", "="]
  sendToParent(e: any){
    this.messageFromchild.emit(e);
  }
}
