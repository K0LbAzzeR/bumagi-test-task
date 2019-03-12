import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthorizationService } from 'src/app/_service/authorization.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
  providers: [AuthorizationService]
})
export class AuthorizationComponent implements OnInit {

  public authorizationForm: FormGroup = new FormGroup({
    login: new FormControl(),
    pass: new FormControl(),
  });

  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit() {
  }

  submit(login: string, password: string) {
    console.log(this.authorizationForm);
    console.log(login);
    console.log(password);
    // this.
    // getResponseFromService
    // console.log(this.authorizationForm.value.pass);
   }
}
