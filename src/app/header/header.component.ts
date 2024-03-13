import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  username:string|null='';
  ngOnInit(): void {
    this.username=localStorage.getItem('username');
  }

}
