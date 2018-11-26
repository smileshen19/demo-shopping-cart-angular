import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment.prod';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(
    private httpService: HttpService,
  ) { }

  uploadImg(file: File): any {
    const apiUrl = `${environment.webApiUrl}/Image`;
    const formData = new FormData();
    formData.append('file', file);
    return this.httpService.post(apiUrl, formData).pipe(tap(x => { console.log('ImageService uploadImg() response = ', x); }));
    // this.httpService.post
  }
}
