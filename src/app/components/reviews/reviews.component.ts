import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'email', 'rating', 'actions'];
  dataSource = [];
  siteRating = 0
  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
  getSiterating(){
    this.http.get('/api/reviews/rating').subscribe((obj:any)=>{
      this.siteRating = obj.rating.toFixed(2)
    },err=>{
      console.log(err)
    })
  }
  onDelete(id:any){
    this.http.delete(`/api/reviews/${id}`).subscribe(obj=>{
      this.openSnackBar('Deleted','close')
      this.getData()
      this.getSiterating()
    },err=>{
      console.log(err)
    })
  }
  getData(){
    this.http.get('/api/reviews').subscribe((obj:any)=>{
      console.log(obj)
      let data = []
      obj.map((v,i)=>{
        data.push({
          position: i+1,
          name: v.name,
          email: v.email,
          rating: v.rating,
          actions: v._id
        })
      })
      this.dataSource = data
    },
    err=>{
      console.log(err)
    })
  }
  ngOnInit() {
   this.getData()
   this.getSiterating()
  }

}
