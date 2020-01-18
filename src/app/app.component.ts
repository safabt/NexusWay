import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nexus';
  email :String=localStorage.getItem('email');

  logout() {
    localStorage.clear(); 
    this.email=null;
  }

  
}
