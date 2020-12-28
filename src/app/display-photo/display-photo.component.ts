import { Component, OnInit } from '@angular/core';
import { ShowPhotoService } from '../show-photo.service';

@Component({
  selector: 'app-display-photo',
  templateUrl: './display-photo.component.html',
  styleUrls: ['./display-photo.component.css']
})
export class DisplayPhotoComponent implements OnInit {
  imageUrl = "";

  constructor(private showPhoto: ShowPhotoService) {}

  show = () => {
    this.showPhoto.showPhoto().subscribe((image: any) => {
      this.imageUrl = image.urls.small;
    })
  }

  ngOnInit(): void {}

}
