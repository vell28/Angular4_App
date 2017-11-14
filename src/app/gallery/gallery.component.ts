import { Component, OnChanges, Input } from '@angular/core';
import { ImageService} from '../shared/image.service';

@Component({
  moduleId: module.id,
  selector: 'app-gallery',
  templateUrl: 'gallery.component.html',
  styleUrls: ['gallery.component.css']
})
export class GalleryComponent implements OnChanges {
  @Input() filterBy?: string = 'all';
  images: any[] =[];

  constructor( private imageService: ImageService) {
    this.images = this.imageService.getImages();
}

  OnChanges() {
    this.images = this.imageService.getImages();
  }

}
