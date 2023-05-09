import { Component, OnInit } from '@angular/core';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  faPlus = faPlus;

  formBtn?: boolean;

  constructor() {}

  ngOnInit(): void {}

  addForm() {
    this.formBtn = true;
  }

  addTask(e: any) {
    e.preventDefault();
    this.hideForm(e);
  }

  hideForm(e: any) {
    e.preventDefault();
    this.formBtn = false;
  }

  // TODO: implement firebase and delete this

  taskList = [
    { title: 'Hello' },
    { title: '2nd task', description: 'ufoiafiajiofdjaiodfj asid' },
  ];
}
