import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { GlobalRef } from 'src/app/core/global.ref';

@Component({
  selector: 'ngth-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('refreshForm') refreshForm: ElementRef;

  title = 'ngth-bsadmin';

  constructor(private global: GlobalRef, private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:3000/posts/1').subscribe(v => console.log(v));
  }

  @HostListener('window:unload', ['$event'])
  unloadHandler() {
    if (this.global.window.performance.navigation.type !== 1) {
      this.clearSession(1);
    }
  }

  private clearSession(id: number) {
    sessionStorage.removeItem('signedIn');
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', `http://localhost:3000/posts/${id}`, false);
    xhr.send();
  }
}
