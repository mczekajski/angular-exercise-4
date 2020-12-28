import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ShowPhotoService {
  constructor(private http: HttpClient) {}

  public showPhoto() {
    return this.http.get('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID nMPzR0SoiMGfSEa7sguOMQ92WPfT4F14cY-eS6FPk94'
      }
    });
  }
}
