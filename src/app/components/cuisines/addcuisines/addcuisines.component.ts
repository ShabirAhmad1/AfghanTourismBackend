import { Component, OnInit, Input } from '@angular/core';
import { UrlRefineService } from 'src/app/services/url-refine.service';

@Component({
  selector: 'app-addcuisines',
  templateUrl: './addcuisines.component.html',
  styleUrls: ['./addcuisines.component.css']
})
export class AddcuisinesComponent implements OnInit {

  constructor(private refineurl : UrlRefineService) {
   }

  ngOnInit() {
  }
}
