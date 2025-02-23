import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name',
  standalone: true
})
export class NamePipe implements PipeTransform {

  transform(value: string, gender: string): string {

    return gender ==='Male'? 'Mr. '+value : 'Miss. '+value ;
  }

}
