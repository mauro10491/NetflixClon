import { Component, OnInit } from '@angular/core';
import { MoviesApiServiceService } from 'src/app/service/movies-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

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
