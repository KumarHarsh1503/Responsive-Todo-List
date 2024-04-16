import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDo List';
  todoList : any[] = [];
  addTask(item : string) {
    
    this.todoList.push({id:this.todoList.length, name: item});
    console.warn(this.todoList);
  }

  removeTask(id: number) {
    console.warn(id);
    this.todoList = this.todoList.filter(item=> item.id!==id)
    }
}
