import { Component, OnInit } from '@angular/core';


export interface OrderListData {
  OrderName: string;
  position: number;
  weight: number;
  symbol: string;
}

const OrderData: OrderListData[] = [
  // {position: 1, OrderName: 'Lorem Ipsum', weight: 1.0079, symbol: 'H'},
  // {position: 2, OrderName: 'Helium', weight: 4.0026, symbol: 'He'},
  // {position: 3, OrderName: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {position: 4, OrderName: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, OrderName: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, OrderName: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, OrderName: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})

export class DialogboxComponent implements OnInit {
 
  displayedColumns: string[] = ['position', 'OrderName', 'weight', 'symbol'];
  dataSource = OrderData;

  constructor() { }
  ngOnInit(): void {
  }

}
