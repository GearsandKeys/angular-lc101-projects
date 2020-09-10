import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Beautiful Pictures';
  image1 = 'https://images.pexels.com/photos/4275889/pexels-photo-4275889.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
  image2 = 'https://i.pinimg.com/736x/a7/ea/85/a7ea85c840d66f6a342df749f9b15599.jpg';
  image3 = 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg';

  constructor() { }

  ngOnInit() {
  }

}