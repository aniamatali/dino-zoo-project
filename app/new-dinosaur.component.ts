import { Component, Input,Output, EventEmitter } from '@angular/core';
import { Dinosaur } from './dinosaur.model';

@Component({
  selector: 'new-dinosaur',
  template: `
  <div class="dinoform">

  <form>
  <div class="row">
  <div class="col-md-6">
    <p>Species</p>
    <input type="text" #species><br>
    <p>Name</p>
    <input type="text" #name>
    <p>Age</p>
    <input type="text" #age>
    <p>Diet</p>
    <select #diet>
      <option value = "Herbivore">Herbivore</option>
      <option value = "Carnivore">Carnivore</option>
      <option value = "Omnivore">Omnivore</option>
    </select>
  </div>
  <div class="col-md-6">
    <p>Location</p>
    <input type="text" #location><br>
    <p>Sex</p>
    <input type="text" #sex><br>
    <p>Likes</p>
    <input type="text" #likes><br>
    <p>Dislikes</p>
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
