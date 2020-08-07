import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router'
import { UrlRefineService } from 'src/app/services/url-refine.service';


@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.css']
})
export class PostcardComponent implements OnInit {
  routerLinksForEdit={
    dress: '/edit-dress',
    cuisine: '/edit-cuisine',
    view: '/edit-attractions',
    hotel : '/edit-hotel'
  }
  @Input() post : any
  @Input() variant: any
  loadingDelete= false
  show=true
  constructor(private http: HttpClient, private _snackBar: MatSnackBar, private router: Router, private refine: UrlRefineService) { }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  Delete(){
    this.loadingDelete = true
    this.http.delete(`${this.refine.fetchUrlforDelete(this.variant)}/${this.post._id}`).subscribe(obj=>{
      this.openSnackBar("Post Deleted","Close")
      this.loadingDelete=false
      // this.show=false
    },err=>{
      console.log(err)
    })
    console.log(this.refine.fetchUrlforDelete(this.variant))
    console.log(this.post._id)
  }
  Edit(){
    this.router.navigateByUrl(`${this.routerLinksForEdit[this.variant]}/${this.post._id}`)

  }

  ngOnInit() {
  }

}
