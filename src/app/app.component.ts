import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = "TodoApp"
  isDisplay : boolean = false;
  model = new Model();

  getName() : string{
    return this.model.user;
  }

  getItems() : TodoItem[]{
    if(this.isDisplay){
      return this.model.items;
    }
    return this.model.items.filter(item => !item.action);
  }

  addItem(value) : void {
    if(value != "") {
      this.model.items.push(new TodoItem(value, false));
    }
  }
}
