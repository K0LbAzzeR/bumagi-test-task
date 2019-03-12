import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private httpClient: HttpClient) { }

  //   POST https://frontend-test.cloud.technokratos.com/auth
  // {
  // 	"login": "test@example.com",
  // 	"password": "1q2w3e"
  // }

  login: string;
  password: string;

  postData(login: string, password: string) {

    const body = { login, password };
    return this.httpClient.post('https://frontend-test.cloud.technokratos.com/auth', body);
  }

  // // получить ответ от сервиса
  // public getResponseFromService(url: string): Observable<any> {
  //   return this.httpClient.get(url);
  // }

  // // получить ответ от сервиса
  // public getResponseFromService(url: string): Subscription { // : Observable<any> {
  //   return this.httpClient.get(url).subscribe(
  //     value => {
  //       // value - результат
  //     },
  //     error => {
  //       // error - объект ошибки
  //     });
  // }
}
