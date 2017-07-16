import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fist-form',
  templateUrl: './fist-form.component.html',
  styleUrls: ['./fist-form.component.sass']
})
export class FistFormComponent implements OnInit {

  selected = 0;
  selectOptions = [
    {'value': '1', 'description': 'Sample 1'},
    {'value': '2', 'description': 'Sample 2'},
    {'value': '3', 'description': 'Sample 3'},
    {'value': '4', 'description': 'Sample 4'},
    {'value': '5', 'description': 'Sample 5'},
    {'value': '6', 'description': 'Sample 6'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
