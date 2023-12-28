/*import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { SellerServices } from './services/seller.service';

@Injectable({
 providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 constructor(private sellerService: SellerServices, private router: Router) { }

 canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('seller')) {
      return true;
    } else {
      return this.sellerService.isSellerLoggedIn.pipe(
        map(data => {
          if (data) {
            return true;
          } else {
            this.router.navigate(['/seller/login']);
            return false;
          }
        }),
        catchError(error => {
          console.log(error);
          return of(false);
        })
      );
    }
 }
}*/
