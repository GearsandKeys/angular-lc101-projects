import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }
   movieStatus = true;
   ngOnInit() {
   }

   addMovie (newTitle: string) {
      if(!this.movies.includes(newTitle) && newTitle !== ""){
         this.movies.push(newTitle);
         this.movieStatus = true
         
      } else {
         this.movieStatus = false;
      }
   }
}