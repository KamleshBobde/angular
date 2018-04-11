import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  createCustomer() {
    alert("create customer");
  }

  searchCustomer() {
    alert("search customer");
  }

  updateCustomer() {
    alert("update customer");
  }

}
