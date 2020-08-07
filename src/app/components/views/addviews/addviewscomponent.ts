import { Component, OnInit, Input } from '@angular/core';
import { UrlRefineService } from 'src/app/services/url-refine.service';

@Component({
  selector: 'app-addviews',
  templateUrl: './addviews.component.html',
  styleUrls: ['./addviews.component.css']
})
export class AddviewsComponent implements OnInit {

  constructor(private refineurl : UrlRefineService) {
   }

  ngOnInit() {
  }
}
