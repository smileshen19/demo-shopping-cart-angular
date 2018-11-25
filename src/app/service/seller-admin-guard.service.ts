import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { AppService } from './app.service';
import { Observable, of } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class SellerAdminGuardService implements CanActivate {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private appService: AppService,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const isAdmin = this.appService.isAdmin();
    // console.log('isAdmin = ', isAdmin);
    if (isAdmin) {
      return true;
    } else {
      return of(true).pipe(
        finalize(() => {
          this.router.navigate(['../seller/authority'], { relativeTo: this.activatedRoute });
        })
      );
    }
  }
}
