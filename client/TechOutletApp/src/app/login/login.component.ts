import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	register: boolean;

	constructor(private router : Router) {
		this.register = this.router.url === '/register' ? true : false;
	}

	ngOnInit(): void {
		
	}

}
