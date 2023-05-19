import { Component, OnInit } from '@angular/core';

import { TasklistService } from '../services/tasklist.service';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  // TODO: implement firebase and delete this

  faPlus = faPlus;

  formBtn?: boolean;

  constructor(public tasklist: TasklistService) {}

  ngOnInit(): void {}

  addForm() {
    this.formBtn = true;
  }

  newTitle: string = '';
  newDescription: string = '';
  showErr: boolean = false;

  addTask() {
    if (this.newTitle !== '') {
      this.tasklist.addTask(this.newTitle, this.newDescription);

      this.newTitle = '';
      this.newDescription = '';

      this.formBtn = false;
      this.showErr = false;
    } else {
      this.showErr = true;
    }
  }

  hideForm(e: any) {
    this.newTitle = '';
    this.newDescription = '';
    this.formBtn = false;
    e.preventDefault();
  }
}
