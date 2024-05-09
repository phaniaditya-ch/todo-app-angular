import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../todos/Todo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter()

  title!: string;
  desc!: string;
  handleSubmit() {
    let todo: Todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true
    }

    console.log(`title: ${this.title}, desc: ${this.desc}`)

    if(this.title == undefined) {
      alert("Please fill the title field")
    }
    else if(this.desc == undefined) {
      alert("Please fill the description field")
    }
    else
    this.todoAdd.emit(todo)
  }

}