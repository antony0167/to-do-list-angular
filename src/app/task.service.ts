import { Injectable } from '@angular/core';
import {ListModel} from "./list.model";

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  // @ts-ignore
  tasks: ListModel[] = localStorage.getItem("key") ? JSON.parse(localStorage.getItem("key")) : [];

  addTask(task: String) {
    this.tasks.push({index: this.tasks.length, name: task, checked: false})
    // @ts-ignore
    let JSONtasks = JSON.stringify(this.tasks)
    localStorage.setItem('key', JSONtasks);
  }

  deleteTask(id: Number) {
    const indexOfObject = this.tasks.findIndex((object: ListModel) => {
      return object.index === id;
    });

    console.log(indexOfObject); // 👉️ 1

    if (indexOfObject !== -1) {
      this.tasks.splice(indexOfObject, 1);
    }
    localStorage.setItem("key", JSON.stringify(this.tasks));
  }

  getTask(id: Number):ListModel|null {
    for(let task of this.tasks) {
      if(task.index === id) {
        return task;
      }
    }
    return null;
  }

}
