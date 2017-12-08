import { Component, Input,Output, EventEmitter } from '@angular/core';
import { Dinosaur } from './dinosaur.model';

@Component({
  selector: 'dinosaur-list',
  template: `



  <ul>

  <li *ngFor="let currentItem of childDinosaurList | diet:filterBydiet">
  Species: {{currentItem.species}}
  | Name: {{currentItem.name}}
  | Age: {{currentItem.age}}
  | Diet: {{currentItem.diet}}
  | Location: {{currentItem.location}}
  | Sex: {{currentItem.sex}}
  | Likes: {{currentItem.likes}}
  | Dislikes: {{currentItem.dislikes}}
  | Caretakers
    <span *ngIf="currentItem.caretakers <= 5" style="color:red;">{{currentItem.caretakers}}</span>
    <span *ngIf="currentItem.caretakers > 5" style="color:green;">{{currentItem.caretakers}}</span>
    <span *ngIf="currentItem.caretakers < 1"> Nature always finds a way! </span><button (click)="editDinosaurClicked(currentItem)">Edit!</button>
    <button (click)="updateDinosaurCaretakers(currentItem)">eat caretaker!</button>

  </li>

  </ul>

  <select (change)="onChange($event.target.value)">
    <option value = "alldinosaurs"> All Dinosaurs</option>
    <option value = "Herbivore">Herbivores</option>
    <option value = "Carnivore">Carnivores</option>
  </select>

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
