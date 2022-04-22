import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment/environment';
import { Pic } from '@shared/interface/pic.interface';
import { createClient } from 'pexels';

@Injectable({
  providedIn: 'root',
})
export class PicService {
  public pics=[]
  constructor(private http: HttpClient) {}
  searchRandomPics() {
    return this.http.get<Pic[]>(`${environment.baseUrlAPI}`);
  }
  searchRandomPicsPexeles() {
    const client = createClient('563492ad6f91700001000001f4c7622c56d648c18a6052c44e0be8a3');
    client.photos.curated({ per_page: 10 }).then(photos => this.pics);
  }
  searchKindPics(query = '', page = 1) {
    return this.http.get<Pic[]>(`${environment.baseUrlAPI}?query=${query}`);
  }
}
