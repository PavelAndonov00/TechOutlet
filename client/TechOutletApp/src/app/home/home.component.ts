import { Component, OnInit } from '@angular/core';

interface Card {
  imageSrc: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards: Card[];

  constructor() {
    this.cards = [
      {imageSrc: "../assets/hp.png", title: "Laptop HP Pavillion 15", description: "Super fast laptop"},
      {imageSrc: "../assets/hp.png", title: "Laptop HP Pavillion 15", description: "Super fast laptop"},
      {imageSrc: "../assets/hp.png", title: "Laptop HP Pavillion 15", description: "Super fast laptop"},
      {imageSrc: "../assets/hp.png", title: "Laptop HP Pavillion 15", description: "Super fast laptop"},
      {imageSrc: "../assets/hp.png", title: "Laptop HP Pavillion 15", description: "Super fast laptop"},
      {imageSrc: "../assets/hp.png", title: "Laptop HP Pavillion 15", description: "Super fast laptop"}
    ];
  }

  ngOnInit(): void {
  }

}
