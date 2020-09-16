import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  slides:any[] = [
    {
      name: "Slider1",
      img: "https://cdn.pixabay.com/photo/2020/04/20/09/42/seagulls-5067489_960_720.jpg",
      desc: "images from slide1"
    },
    {
      name: "Slider2",
      img: "https://cdn.pixabay.com/photo/2020/08/25/00/48/mountains-5515324_960_720.jpg",
      desc: "images from slide2"
    },
    {
      name: "Slider3",
      img: "https://cdn.pixabay.com/photo/2020/06/11/20/06/dog-5288071_960_720.jpg",
      desc: "images from slide3"
    },
    {
      name: "Slider4",
      img: "https://cdn.pixabay.com/photo/2017/12/08/12/25/berlin-3005717_960_720.jpg",
      desc: "images from slide4"
    },
    {
      name: "Slider5",
      img: "https://cdn.pixabay.com/photo/2019/07/14/08/08/night-4336403_960_720.jpg",
      desc: "images from slide5"
    }
  ]

  constructor(private _config:NgbCarouselConfig) { }

  ngOnInit(): void {
  }

}
