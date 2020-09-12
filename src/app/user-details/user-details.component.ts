import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
import { MatDialog } from '@angular/material/dialog';
import { FilterPipe} from './filter.pipe';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
 
  loadedData = [];
  
  constructor(private http:HttpClient, public dialog: MatDialog) { }
   
  ngOnInit(){
    
    this.http.get('https://userdetails-689e8.firebaseio.com/posts.json')
    .pipe(map(responce =>{
      const postArray = [];
      // console.log(responce);
      for(const key in responce){
        if(responce.hasOwnProperty(key)){
          postArray.push({...responce[key],id:key});
        }
      }
      return postArray;
    })
    )
    .subscribe(responceData=>{
      console.log(responceData);
     this.loadedData = responceData;
    }); 
  }
  // filteredStatus='';

  onAddUser(){
    console.log('working');
 }

 onView(){
   console.log('Working');
    this.dialog.open(DialogboxComponent);
 }

 onEdit(){
   console.log('Edit Works');
 }

 onDelete(){
   console.log('Delete');
 }
 
}
