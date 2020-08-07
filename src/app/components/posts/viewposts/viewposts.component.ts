import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlRefineService } from 'src/app/services/url-refine.service';
@Component({
  selector: 'app-viewposts',
  templateUrl: './viewposts.component.html',
  styleUrls: ['./viewposts.component.css']
})
export class ViewpostsComponent implements OnInit {

  @Input() variant : any
  posts = null
  
  constructor(private http: HttpClient, private refine: UrlRefineService) { }

  routerLinksForAdd={
    dress: '/add-dress',
    cuisine: '/add-cuisine',
    view: '/add-attraction',
    hotel : '/add-hotel'
  }
  
  ngOnInit() {
    this.http.get(this.refine.fetchUrlforallView(this.variant)).subscribe((obj)=>{
      console.log(`from obj ${obj}`)
      console.log(obj)
      this.posts = obj
    },err=>{
      console.log(err)
    })
  }
}
