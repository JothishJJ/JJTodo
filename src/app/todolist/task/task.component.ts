import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  // TODO: implement firebase here and delete this
  @Input() tasks?: { title: string; description: string }[];

  constructor() {}

  ngOnInit(): void {}
}
