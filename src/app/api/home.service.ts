import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) {}

  gethome(): Observable<any> {
    return this.http.get("http://localhost:3000/products")
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}

