import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-view-dresses',
  templateUrl: './view-dresses.component.html',
  styleUrls: ['./view-dresses.component.css']
})
export class ViewDressComponent implements OnInit {
  posts = null
  
  constructor(private http: HttpClient) { }

  
  ngOnInit() {
    this.http.get('api/posts/dresses').subscribe((obj)=>{
      console.log(`from obj ${obj}`)
      console.log(obj)
      this.posts = obj
    },err=>{
      console.log(err)
    })
  }

}
