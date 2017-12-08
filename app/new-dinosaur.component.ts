import { Component, Input,Output, EventEmitter } from '@angular/core';
import { Dinosaur } from './dinosaur.model';

@Component({
  selector: 'new-dinosaur',
  template: `
  <div class="dinoform">
  <form>
  <div class="row">
  <div class="col-md-6">
    Species<br>
    <input type="text" #species><br>
    Name<br>
    <input type="text" #name><br>
    Age<br>
    <input type="text" #age><br>
    Diet<br>
    <select #diet>
      <option value = "Herbivore">Herbivore</option>
      <option value = "Carnivore">Carnivore</option>
      <option value = "Omnivore">Omnivore</option>
    </select>
  </div>
  <div class="col-md-6">
    Location<br>
    <input type="text" #location><br>
    Sex<br>
    <input type="text" #sex><br>
    Likes<br>
    <input type="text" #likes><br>
    Dislikes<br>
    <input type="text" #dislikes><br>
  </div>
    <div class="col-md-12">
    <button id ="adddinobutt" (click) = "NewItems(species.value, name.value, age.value, diet.value, location.value, sex.value, likes.value, dislikes.value); species.value='';name.value='';age.value='';diet.value='';location.value='';sex.value='';likes.value='';dislikes.value='';">Add</button>
    </div>
    </div>

  </form>
</div>

  `
})

export class NewDinosaurComponent {
  @Input() childNewDinosaur: Dinosaur[];
  @Output() newSender = new EventEmitter();

  NewItems(species: string, name: string, age: number, diet: string, location: string, sex: string, likes: string, dislikes: string){
    this.newSender.emit(new Dinosaur(species, name, age, diet, location, sex, likes, dislikes));
  }

}
