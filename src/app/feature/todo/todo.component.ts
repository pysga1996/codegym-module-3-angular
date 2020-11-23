import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {ITodo} from '../../model/todo';

let id = 1;
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  userInput = new FormControl();
  todoList: Array<ITodo> = [];
  constructor() { }

  ngOnInit(): void {
  }

  onChange(): void {
    const {value} = this.userInput;
    if (value) {
      const todo: ITodo = {
        id: id++,
        content: value,
        complete: false
      };
      this.todoList.push(todo);
      this.userInput.setValue('');
    }
  }

  toggleTodo(i): void {
    this.todoList[i].complete = !this.todoList[i].complete;
  }

}
