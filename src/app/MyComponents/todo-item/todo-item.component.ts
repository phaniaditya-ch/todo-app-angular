import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todos/Todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo !: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter()

  constructor() {

  }

  handleCheckBox() {
    console.log("CheckBox Triggered")
    this.todo.active = !this.todo.active
    console.log(this.todo)
  }

  handleClick(todo: Todo) {
    console.log("CLICK TRIGGERED")
    this.todoDelete.emit(todo)
  }
}
