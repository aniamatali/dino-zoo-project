import { Component, Input,Output, EventEmitter } from '@angular/core';
import { Dinosaur } from './dinosaur.model';

@Component({
  selector: 'new-dinosaur',
  template: `
  <form>
    Species:
    <input type="text" #species><br>
    Name:
    <input type="text" #name><br>
    Age:
    <input type="text" #age><br>
    Diet:
    <select #diet>
      <option value = "Herbivore">Herbivore</option>
      <option value = "Carnivore">Carnivore</option>
      <option value = "Omnivore">Omnivore</option>
    </select>
    <br>
    Location:
    <input type="text" #location><br>
    Sex:
    <input type="text" #sex><br>
    Likes:
    <input type="text" #likes><br>
    Dislikes:
    <input type="text" #dislikes><br>
    <button (click) = "NewItems(species.value, name.value, age.value, diet.value, location.value, sex.value, likes.value, dislikes.value); species.value='';name.value='';age.value='';diet.value='';location.value='';sex.value='';likes.value='';dislikes.value='';">Add</button>
  </form>
  `
})

export class NewDinosaurComponent {
  @Input() childNewDinosaur: Dinosaur[];
  @Output() newSender = new EventEmitter();

  NewItems(species: string, name: string, age: number, diet: string, location: string, sex: string, likes: string, dislikes: string){
    this.newSender.emit(new Dinosaur(species, name, age, diet, location, sex, likes, dislikes));
  }

}
