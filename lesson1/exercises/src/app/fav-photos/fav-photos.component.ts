import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'These are a few of my favorite.... photos... of things!';
  image1 = 'https://i.ytimg.com/vi/gMyn799BOks/maxresdefault.jpg';
  image2 = 'https://i.pinimg.com/736x/3b/f6/8c/3bf68c51bb824df26a4d6211eaa52342--banana-art-garnishing-ideas.jpg';
  image3 = 'https://miro.medium.com/max/640/0*R3DWvEin6JYrnpyj.jpg';

  constructor() { }

  ngOnInit() {
  }

}