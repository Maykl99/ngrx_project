import { Observable } from 'rxjs';
import { HttpEventType, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{ // agg. implements HttpInterceptor

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {
    let token = localStorage.getItem('token');
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next.handle(request);
  }
}
