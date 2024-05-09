import { Component } from '@angular/core';
import { Todo } from './Todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { EventEmitter } from 'stream';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {

  todos: Todo[]
  localTodo!: string | null

  constructor() {
    this.todos = [
      {
        sno: 1,
        title: 'Learn Angular',
        desc: 'as it is needed for internship',
        active: true
      }
    ]
  }

  handleActiveStatus(todo : Todo ) {
    
  }

  handleDelete(todo : Todo) {
    console.log(todo)
    this.todos.splice(this.todos.indexOf(todo), 1)
  }

  handleAdd(todo : Todo) {
    console.log(todo)
    this.todos.push(todo);
  }
}
