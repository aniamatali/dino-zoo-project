import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Dinosaur } from './dinosaur.model';

@Component({
  selector: 'edit-dinosaur',
  template: `
  <div class="dinoeditinfo">
  <div *ngIf="childSelectedDinosaur">
  <h3>{{childSelectedDinosaur.species}}</h3>
  <h3>{{childSelectedDinosaur.name}}</h3>
  <h3>{{childSelectedDinosaur.age}}</h3>
  <h3>{{childSelectedDinosaur.diet}}</h3>
  <h3>{{childSelectedDinosaur.location}}</h3>
  <h3>{{childSelectedDinosaur.sex}}</h3>
  <h3>{{childSelectedDinosaur.likes}}</h3>
  <h3>{{childSelectedDinosaur.dislikes}}</h3>
  </div>
  <div class="dinoeditinfo2">
  <h3>Edit Dinosaur</h3>
  Edit Name:
  <input type="text" #name><br>
  Edit Age:
  <input type="text" #age><br>
  Edit Diet:
  <input type="text" #diet><br>
  Edit Species:
  <input type="text" #species><br>
  Edit Sex:
  <input type="text" #sex><br>
  Edit Location:
  <input type="text" #location><br>
  Edit Likes:
  <input type="text" #likes><br>
  Edit Dislikes:
  <input type="text" #dislikes><br>
  <button (click) = "doneButtonClicked(species.value, name.value, age.value, diet.value, location.value, sex.value, likes.value, dislikes.value)">Done</button>
  </div>
</div>
  `
})

export class EditDinosaurComponent {
  @Input() childSelectedDinosaur: Dinosaur;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked(species: string, name: string, age: number, diet: string, location: string, sex: string, likes: string, dislikes: string) {
    var result = [species, name, age, diet, location, sex, likes, dislikes];
    this.doneButtonClickedSender.emit(result);
  }
}
