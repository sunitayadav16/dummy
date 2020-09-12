import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  showFiller = false;
  adminListShow = false;
  constructor() { }
   
  ngOnInit(): void {
  }

  onAdminClick(x){
     x.adminListShow =true;
  }
}
