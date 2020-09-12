import { Component, OnInit } from '@angular/core';
import { MatIcon }  from '@angular/material/icon';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  value = 'Clear me';
  constructor() { }

  ngOnInit(): void {
  }

}
