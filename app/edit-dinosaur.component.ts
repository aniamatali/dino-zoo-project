import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Dinosaur } from './dinosaur.model';

@Component({
  selector: 'edit-dinosaur',
  template: `
  <div class="row">
    <div class="dinoeditinfo">
      <div class ="card col-md-12" *ngIf="childSelectedDinosaur">
        <div class="card-header">
          {{childSelectedDinosaur.name}}
        </div>
        <div class="card-body" id="editcard">

            <p>Species:{{childSelectedDinosaur.species}}</p>
            <p>Age:{{childSelectedDinosaur.age}}</p>
            <p>Diet:{{childSelectedDinosaur.diet}}</p>
            <p>Location:{{childSelectedDinosaur.location}}</p>
            <p>Sex:{{childSelectedDinosaur.sex}}</p>
            <p>Likes:{{childSelectedDinosaur.likes}}</p>
            <p>Dislikes:{{childSelectedDinosaur.dislikes}}</p>

        </div>
      </div>
    </div>
  </div>

  <div class="dinoeditinfo2">
    <div class="row">
      <div class="col-md-6">
        Edit Name<br>
        <input type="text" #name><br>
        Edit Age<br>
        <input type="text" #age><br>
        Edit Diet<br>
        <input type="text" #diet><br>
        Edit Species<br>
        <input type="text" #species><br>
        </div>
        <div class="col-md-6">
        Edit Sex<br>
        <input type="text" #sex><br>


        Edit Location<br>
        <input type="text" #location><br>
        Edit Likes<br>
        <input type="text" #likes><br>
        Edit Dislikes<br>
        <input type="text" #dislikes><br>
    </div>
  </div>
  <div class="row">
  <div class="col-md-12">
    <button (click) = "doneButtonClicked(species.value, name.value, age.value, diet.value, location.value, sex.value, likes.value, dislikes.value)">Done</button>
  </div>
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
