import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'categoryList'
})
export class CategoryListPipe implements PipeTransform {
  transform(mediaItems) {
      const categories = [];
      mediaItems.forEach(element => {
        if (categories.indexOf(element.category) <= -1) {
          categories.push(element.category);
        }
      });
      return categories.join(', ');
  }
}
