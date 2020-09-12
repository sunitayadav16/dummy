import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';


export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})

export class AdduserComponent implements OnInit{
 @ViewChild('postForm') signup:NgForm;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  checked = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [
    {name: 'Lemon'},
    {name: 'Lime'},
    {name: 'Apple'}
  ];
  constructor(private http:HttpClient, public dialog: MatDialog) { }

  ngOnInit() {  }

  openDialog() {
    this.dialog.open(DialogboxComponent);
  }

   onToggleSlide(f){
       console.log(f.value);
   }
  
   onSubmit(postdata:
    {owner: string,email:string,namePrefix:string,lastName:string, status:string,password:string,firstName:string,
     nameSuffix:string, username:string, rePassword:string,middlename:string,birthday:any,notes:string, gridPage:string,
     defaultLocation:string,homeScreen:string, roles: any[]} ){

    this.http.post('https://userdetails-689e8.firebaseio.com/posts.json', postdata)
    .subscribe(responceData=>{
      console.log(responceData);
    });
    this.signup.reset(NgForm);
   }

  onCancel(){
    this.signup.reset(NgForm);
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  // openDialog() {
  //   // const dialogRef = this.dialog.open(dialog-box);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
}
