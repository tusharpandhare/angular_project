import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, sName: string): any {
    if(sName === "") {
      return value;
    }
    const taskArray: any[]=[];
    for(let i =0 ; i < value.length; i++) {
      let tName:string = value[i].taskName.toLowerCase();
      if(tName.toLowerCase().startsWith(sName)) {
        taskArray.push(value[i])
      }
    }
    return taskArray;
  }

}
