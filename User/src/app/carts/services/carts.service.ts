import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private http:HttpClient) { }

  createNewCart(model:any) {
    return this.http.post(environment.baseApi + 'carts', model);
  }
}
