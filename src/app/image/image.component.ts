import { Component } from '@angular/core';
import { ImageService } from '../shared/image.service';
import { ActivatedRoute } from '@angular/router'
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  templateUrl: 'image.component.html',
  styleUrls: ['image.component.css']
})
export class ImageComponent {
  image:any

  constructor(private imageService: ImageService,
              private route: ActivatedRoute) { }

  ngOnInit(){
    this.image = this.imageService.getImage(
      +this.route.snapshot.params['id']
    )
  }
}
