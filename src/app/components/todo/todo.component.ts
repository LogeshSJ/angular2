import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  
})
export class TodoComponent {
  input: string = '';
  todos: Todo[] = [];
  editId=0;
  btnText ='Add';

  constructor(private todoservice:TodoService){}
  add():void {
    if(this.editId==0){
 this.todos=this.todoservice.add(this.input);
    } else{
      this.todos= this.todoservice.edit(this.editId,this.input);
      // this.editId =0;
      // this.btnText ='Add';
    }
    this.input="";
  }
delete(id:number):void{
  this.todos=this.todoservice.delete(id)
}
edit(id:number):void{
  this.editId=id;
  this.btnText='Edit';
  this.input =this.todoservice.getItem(id);
}
}
