import { Component } from '@angular/core';
import {TaskService} from "../task.service";
import {ListModel} from "../list.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  taskArray:ListModel[] = this.taskService.tasks;
  constructor(private taskService: TaskService) {
  }
  onSubmit(f: NgForm) {
    this.taskService.addTask(f.value.task)
    f.reset();
  }

  onDelete(index: Number) {
    this.taskService.deleteTask(index);
  }

  onToggle(index: Number) {
    // @ts-ignore
    this.taskService.getTask(index).checked = !this.taskService.getTask(index).checked;
  }

}
