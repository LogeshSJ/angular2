import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];
  constructor() {}
  add(input: string): Todo[] {
    let todo = { id: this.todos.length + 1, item: input };
    this.todos.push(todo);
    return this.todos;
  }
  delete(id:number):Todo[]{
    let newTodos:Todo[]=[];
    for(let todo of this.todos){
      if(todo.id!== id){
        newTodos.push(todo);
      }
    }
    this.todos=newTodos;
    return this.todos
    }
     getItem(id:number): string{
      let todo =this.todos.find((todo)=>todo.id===id)
      if(todo) return todo.item;
      else return '';
     }
     edit(id:number,input:string): Todo[]{
      let newTodos :Todo[]=[];
      for(let todo of this.todos){
        if(todo.id!== id){
          newTodos.push(todo);
        }else{
          let updatedTodo:Todo ={id:id,item:input};
          newTodos.push(updatedTodo);
     }
  }
  this.todos =newTodos;
  return this.todos;
}
}
