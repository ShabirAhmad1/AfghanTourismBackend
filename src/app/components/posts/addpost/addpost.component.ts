import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'
import { UrlRefineService } from 'src/app/services/url-refine.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
  images = []
  imageslink = []
  imagesuploadcomplete = true
  @Input() variant: any
  ingrediantsCount: any = [0]
  routerLinksForView={
    dress: '/view-dresses',
    cuisine: '/view-cuisines',
    view: '/view-attractions',
    hotel: '/view-hotels'
  }
  constructor(private _DomSanitizationService: DomSanitizer,
    private http: HttpClient, private router: Router, private refine: UrlRefineService) {
  }

  ngOnInit() {
    console.log(this.variant)
  }
  addIngrediant() {
    this.ingrediantsCount.push(this.ingrediantsCount.length)
  }
  onSubmit(data: any) {
    console.log(data.value)
    let Ingrediants = []
    this.ingrediantsCount.forEach(element => {
      if (data.value[`ingrediant_${element}`] && data.value[`quantity_${element}`]) {
        Ingrediants.push({
          name: data.value[`ingrediant_${element}`],
          quantity: data.value[`quantity_${element}`]
        })
      }
    });
    let obj = {
      description: data.value.Description,
      title: data.value.Title,
      images: this.imageslink,
      ingredients: Ingrediants,
      lon: data.value.Longitude,
      lat: data.value.Latitude,
      price: {
        min: data.value.Min,
        max: data.value.Max
      },
      rank : data.value.Rank
    }
    console.log(obj)
    this.http.post(this.refine.fetchUrlforpost(this.variant), obj).subscribe((obj) => {
      this.router.navigateByUrl(this.routerLinksForView[this.variant])
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
            console.log(`from image ${obj}`)
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
