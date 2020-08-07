import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent implements OnInit {

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
  ngOnInit() {
  }
  onSubmit(form) {
    this.http.post('/api/admin', {
      name: form.value.Name,
      email: form.value.Email,
      password: form.value.Password,
      authorizationLevel: form.value.Super ? 1 : 5
    }).subscribe(obj => {
      console.log(obj)
      if (obj) {
        this.openSnackBar('Admin Created', 'Close')
      }
    },
      err => {
        console.log(err.error.Reason)
        let msg = err.error.Reason
        this.openSnackBar(msg, 'Close')
      })
  }
}