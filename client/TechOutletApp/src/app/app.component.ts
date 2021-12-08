import { Component } from '@angular/core';

interface Card {
  imageSrc: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TechOutletApp';
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


}
