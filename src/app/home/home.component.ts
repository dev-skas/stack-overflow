import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  search:string=''
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  searchNow() {
    localStorage.setItem("searchId", this.search)
    this.route.navigateByUrl('/result')
  }

}
