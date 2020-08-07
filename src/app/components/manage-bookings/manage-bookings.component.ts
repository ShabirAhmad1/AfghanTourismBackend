import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-manage-bookings',
  templateUrl: './manage-bookings.component.html',
  styleUrls: ['./manage-bookings.component.css']
})
export class ManageBookingsComponent implements OnInit {

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
  data = []
  ngOnInit() {
    this.http.get('/api/posts/book/hotel').subscribe((obj: any) => {
      console.log(obj)
      this.data = obj
    }, err => {
      console.log(err)
    })
  }
  updateStatus(value, id) {
    this.http.post('/api/posts/book/hotel/update', {
      id: id,
      Status: value
    }).subscribe((obj: any) => {
      this.openSnackBar('Status Updated', 'Close')
      this.ngOnInit()
    }, err => {
      console.log(err)
    })
  }

}
