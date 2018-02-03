import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router) { }
// storing the access token using session storage
  ngOnInit() {
    sessionStorage.setItem('access_token', 'true');
    //  this._router.navigate(['/customers']);
  }

}
