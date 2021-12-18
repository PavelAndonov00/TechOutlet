import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-advert',
	templateUrl: './advert.component.html',
	styleUrls: ['./advert.component.css']
})
export class AdvertComponent implements OnInit {
	desc: string = '';
	constructor() { }

	ngOnInit(): void {
	}

	log(c: any) : void {
		var promenliva = c;
		console.log(promenliva);
	}
}
