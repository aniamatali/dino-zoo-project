import { Component, Input,Output, EventEmitter } from '@angular/core';
import { Dinosaur } from './dinosaur.model';

@Component({
  selector: 'dinosaur-list',
  template: `


<div class="dinolist">

<select (change)="onChange($event.target.value)">
  <option value = "alldinosaurs"> All Dinosaurs</option>
  <option value = "Herbivore">Herbivores</option>
  <option value = "Carnivore">Carnivores</option>
</select>

<div class="row">
  <div class="card col-md-4" *ngFor="let currentItem of childDinosaurList | diet:filterBydiet">
  <div class="card-header">
  Name: {{currentItem.name}}

  </div>
  <div class="card-body">
  <ul>
  <li>Species: {{currentItem.species}}</li>
  <li>Age: {{currentItem.age}}</li>
  <li>Diet: {{currentItem.diet}}</li>
  <li>Location: {{currentItem.location}}</li>
  <li>Sex: {{currentItem.sex}}</li>
  <li>Likes: {{currentItem.likes}}</li>
  <li>Dislikes: {{currentItem.dislikes}}</li>
  </ul>
  </div>
  <div class="card-footer">
  Caretakers
    <span *ngIf="currentItem.caretakers <= 5" style="color:red;">{{currentItem.caretakers}}</span>
    <span *ngIf="currentItem.caretakers > 5" style="color:green;">{{currentItem.caretakers}}</span>
    <span *ngIf="currentItem.caretakers < 1"> Nature always finds a way! </span><button (click)="editDinosaurClicked(currentItem)">Edit!</button>
    <button (click)="updateDinosaurCaretakers(currentItem)">eat caretaker!</button>
</div>
</div>
</div>



</div>



  `
})

export class DinosaurListComponent {
  @Input() childDinosaurList: Dinosaur[];
  @Output() clickSender = new EventEmitter();
  @Output() eatSender = new EventEmitter();
  filterBydiet: string = "alldinos";

  editDinosaurClicked(dinosaurEdit: Dinosaur){
    this.clickSender.emit(dinosaurEdit);
  }

  updateDinosaurCaretakers(dinosaurEat: Dinosaur){
    this.eatSender.emit(dinosaurEat);
  }

  onChange(optionFromMenu) {
    this.filterBydiet = optionFromMenu;
  }

}
