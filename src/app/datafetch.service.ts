import { Injectable } from '@angular/core';
import {  HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class DatafetchService {

  constructor(private http:HttpClient) { }

  getData(id:any){
    return this.http.get(`https://api.stackexchange.com/2.3/search/advanced?order=asc&sort=relevance&q=${id}&accepted=True&site=stackoverflow`);
    
  }
}
