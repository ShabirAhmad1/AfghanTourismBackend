import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute,Router } from '@angular/router'

@Component({
  selector: 'app-editcuisines',
  templateUrl: './editcuisines.component.html',
  styleUrls: ['./editcuisines.component.css']
})
export class EditCuisinesComponent implements OnInit {

  id: any
  constructor(private _DomSanitizationService: DomSanitizer,
    private http: HttpClient , private router: Router, private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.id = params.id
      console.log(params)
    } );
  }
}
