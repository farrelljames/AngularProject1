//Imports Component and OnInit from angular/core
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: `
  <p>Hello-World works inline</p>
  `
  /*
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
  */
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
