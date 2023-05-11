import { Component, Input, OnInit } from '@angular/core';

import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  // TODO: implement firebase here and delete this
  @Input() tasks?: { title: string; description?: string }[];

  faTrash = faTrash;

  delete(index: number): void {
    this.tasks?.splice(index, 1);
  }

  constructor() {}

  ngOnInit(): void {}
}
