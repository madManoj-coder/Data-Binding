import { Component, OnInit } from '@angular/core';
import { todo } from 'src/app/consts/todo';
import { ITodo } from 'src/app/interface/todoInterface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todoArray : Array<ITodo> = todo;

  constructor() { }

  ngOnInit(): void {
  }

}
