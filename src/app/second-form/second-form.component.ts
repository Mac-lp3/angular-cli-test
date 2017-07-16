import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.sass']
})
export class SecondFormComponent implements OnInit {

  isFunded = false;
  priority = 0;

  constructor() { }

  ngOnInit() {
  }

}
