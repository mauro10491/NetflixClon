import { Component, OnInit } from '@angular/core';
import { MoviesApiServiceService } from 'src/app/service/movies-api-service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{

  constructor(private service:MoviesApiServiceService){}

  ngOnInit(): void {
    this.bannerData();  
  }

  //bannerdata

  bannerData(){
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerResult')
    }); 
  }
}
