import {Pipe, PipeTransform} from '@angular/core';
import {Dinosaur} from './dinosaur.model';

@Pipe({
  name: "diet",
  pure: false
})

export class PricePipe implements PipeTransform {


  transform(input: Dinosaur[], diet) {
    var output: Dinosaur[] = [];
    var totalCareTaker = 0;
    if(diet == "Carnivore") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].diet == "Carnivore") {
          output.push(input[i]);
          totalCareTaker  += input[i].caretakers;
          console.log(totalCareTaker);
        }
      }
      return output;
    } else if (diet == "Herbivore") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].diet == "Herbivore") {
          output.push(input[i]);
          totalCareTaker  += input[i].caretakers;
          console.log(totalCareTaker);
        }
      }
      return output;
    } else {
      return input;
    }
  }


}
