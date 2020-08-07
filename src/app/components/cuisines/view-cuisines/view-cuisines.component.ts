import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-view-cuisines',
  templateUrl: './view-cuisines.component.html',
  styleUrls: ['./view-cuisines.component.css']
})
export class ViewCuisinesComponent implements OnInit {
  posts = null
  
  constructor(private http: HttpClient) { }

  
  ngOnInit() {
  }

}
