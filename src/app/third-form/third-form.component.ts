import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-form',
  templateUrl: './third-form.component.html',
  styleUrls: ['./third-form.component.sass']
})
export class ThirdFormComponent implements OnInit {

  affectedProducts = [];
  products = [
    'Dental',
    'Medical',
    'Mental',
    'Optomistry'
  ];
  affectedCategories = [
    'Category 1',
    'Category 2'
  ];
  categories = [
    'Category 1',
    'Category 2',
    'Category 3',
    'Category 4',
    'Category 5'
  ];

  constructor() {
  }

  ngOnInit() {

  }

}
