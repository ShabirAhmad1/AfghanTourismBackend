import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-admins',
  templateUrl: './view-admins.component.html',
  styleUrls: ['./view-admins.component.css']
})

export class ViewAdminsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'email', 'authorization', 'actions'];
  dataSource = [];
  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
  onDelete(id:any){
    this.http.delete(`/api/admin/${id}`).subscribe(obj=>{
      this.openSnackBar('Deleted','close')
      this.getData()
    },err=>{
      console.log(err)
    })
  }
  getData(){
    this.http.get('/api/admin').subscribe((obj:any)=>{
      console.log(obj)
      let data = []
      obj.map((v,i)=>{
        data.push({
          position: i+1,
          name: v.name,
          email: v.email,
          authorization: v.authorization,
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
  }

}
