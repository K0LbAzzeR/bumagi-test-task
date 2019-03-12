import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  public authorizationForm: FormGroup = new FormGroup({
    login: new FormControl(),
    pass: new FormControl(),
  });

  constructor() { }

  ngOnInit() {
  }

  submit() {
    console.log(this.authorizationForm.value.login);
    console.log(this.authorizationForm.value.pass);
   }
}
