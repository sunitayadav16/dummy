import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, propName: string): any {
    if(value.length === 0){
         return;
         console.log(value);
     } 
     const filterArray =[];
     for(const item of value){
       if(item[propName] === filterString){
         filterArray.push(item);
         console.log(filterArray);
       } 
     }
     return filterArray;
   } 
 }