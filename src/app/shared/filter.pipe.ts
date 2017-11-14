import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'imageFilter'})
export class ImageFilterPipe implements PipeTransform{
  transform(items: any[], kind: string): any {
    if(kind === 'all') { return items } else {
      return items.filter(item => {
        return item.category === kind;
      });
    }
  }
}
