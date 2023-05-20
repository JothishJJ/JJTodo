import { Component, OnInit } from '@angular/core';

import { TasklistService } from '../services/tasklist.service';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  faPlus = faPlus;

  formBtn?: boolean;

  constructor(public tasklist: TasklistService, public auth: AuthService) {}

  ngOnInit(): void {
    this.auth.isVerified();
  }

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
