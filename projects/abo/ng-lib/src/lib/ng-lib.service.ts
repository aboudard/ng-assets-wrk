import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgLibService {

  constructor() { }

  public test(): void {
    console.log('test');
  }
}
