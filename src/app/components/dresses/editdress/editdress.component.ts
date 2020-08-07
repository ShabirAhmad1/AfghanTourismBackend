import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-editdress',
  templateUrl: './editdress.component.html',
  styleUrls: ['./editdress.component.css']
})
export class EditDressComponent implements OnInit {

  id: any
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id
      console.log(params)
    });
  }
}
