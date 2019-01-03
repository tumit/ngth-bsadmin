import { Injectable } from '@angular/core';

function _window() : any {
  // return the global native browser window object
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class GlobalRef {

  constructor() { }

  get window() : any {
    return _window();
 }
}
