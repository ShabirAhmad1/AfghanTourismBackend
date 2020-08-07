import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router'
import { UrlRefineService } from 'src/app/services/url-refine.service';


@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit {
  @Input() id: any
  @Input() variant: any
  images = []
  imageslink = []
  imagesuploadcomplete = true
  ingrediantsCount: any = []
  ingredients : any
  title: any
  description: any
  longitude: any
  latitude: any
  min : any
  max : any
  rank : any
  Description2: string = "hvddjhdjvshdvajhdvjsavdjavh"
  isdataloaded = false
  constructor(private _DomSanitizationService: DomSanitizer,
    private http: HttpClient, private router: Router, private route: ActivatedRoute, private refine: UrlRefineService) {
  }
  addIngrediant() {
    this.ingrediantsCount.push(this.ingrediantsCount.length)
  }
  ngOnInit() {
    this.http.get(this.refine.fetchUrlforsinglepost(this.variant) + '/' + this.id).subscribe((data: any) => {
      console.log(data)
      this.title = data.title
      this.description = data.description
      this.longitude = data.location && data.location.lon
      this.latitude = data.location && data.location.lat
      this.min = data.price && data.price.min
      this.max = data.price && data.price.max
      this.rank = data.rank
      this.ingredients = data.ingredients
      data.ingredients && data.ingredients.map((v)=>this.addIngrediant())
      this.isdataloaded = true
      console.log(this.ingrediantsCount)
      console.log(this.ingredients)
    }, err => {
      console.log(err)
    })
  }

  onSubmit(data: any) {
    let obj = {
      description: data.value.Description,
      title: data.value.Title,
      images: this.imageslink
    }
    this.http.put(this.refine.fetchUrlforpost(this.variant) + '/' + this.id, obj).subscribe((obj) => {
    }, err => {
      console.log(err)
    })
  }
  async onSelectFile(event) {
    // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      // const fileReader: FileReader = new FileReader();
      for (let i = 0; i < event.target.files.length; i++) {
        var reader = new FileReader();

        await reader.readAsDataURL(event.target.files[i]); // read file as data url
        reader.onload = (event) => { // called once readAsDataURL is completed
          this.images.push({
            link: reader.result.toString(),
            showFront: false
          })
          this.imagesuploadcomplete = false

          this.http.post('api/posts/image', {
            "image": reader.result.toString()
          }, {
            headers: new HttpHeaders().set('Content-Type', 'application/json'),
            responseType: 'text'
          }).subscribe((obj) => {
            this.imageslink.push({
              link: obj
            })
            this.imagesuploadcomplete = true
          }, err => {
            console.log(err)
          })

        }
      }
    }
  }
}
