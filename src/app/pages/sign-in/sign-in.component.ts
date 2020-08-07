import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  Wrong: boolean
  constructor(private http: HttpClient,
    private auth : AuthService, private router: Router) { }

  ngOnInit() {
    this.Wrong = false
  }
  onSubmit(data: any){
    this.Wrong = false
    let obj  = {
      email: data.Email,
      password: data.Password
    }
    this.http.post('/api/user/login',obj).subscribe((obj)=>{
      console.log(`from obj ${obj}`)
      console.log(obj)
      this.auth.setData(obj)
      this.router.navigate(['view-cuisines']);
    },err=>{
      this.Wrong = true
      console.log(err)
    })
  }
}
