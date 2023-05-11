import { Component, OnInit } from '@angular/core';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})

export class TodolistComponent implements OnInit {
  // TODO: implement firebase and delete this

  tasks: any[] = [
    { title: 'Hello' },
    { title: '2nd task', description: 'ufoiafiajiofdjaiodfj asid' },
  ];
  faPlus = faPlus;

  formBtn?: boolean;

  constructor() {}

  ngOnInit(): void {}

  addForm() {
    this.formBtn = true;
  }
  
  newTitle: string = '';
  newDescription: string = '';
  
  addTask(e: any) {    
    const newItem = {
      title: this.newTitle,
      description: this.newDescription
    };
    
    this.tasks.push(newItem);
    this.newTitle = '';
    this.newDescription = ''; 
    this.formBtn = false;
  }

  hideForm(e: any) {
    this.newTitle = '';
    this.newDescription = '';
    this.formBtn = false;
    e.preventDefault();
  }

}
