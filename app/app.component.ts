import { Component } from '@angular/core';
import { Dinosaur } from './dinosaur.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="titlediv">
            <h1>Epicodus Park</h1>
          </div>
        </div>
      </div>


    <div class="row">
      <div class="col-md-12">
        <new-dinosaur [childNewDinosaur]="masterDinosaurs" (newSender)="appendNewItems($event)"></new-dinosaur>
        </div>
    </div>
    <div class="row">
    <div class="col-md-12">
      <div class="dinoinfolist">
      <p>Living Caretakers: {{totalCaretakersNeeded}}<p>
        <dinosaur-list [childDinosaurList]="masterDinosaurs" (clickSender)="editDinosaur($event)" (eatSender)="updateDinosaurCaretakers($event)"></dinosaur-list>

      </div>
    </div>
    </div>

    <div class="row">
    <div class="col-md-12">
    <edit-dinosaur [childSelectedDinosaur] = "selectedDinosaur" (doneButtonClickedSender)="finishedEditing($event)"></edit-dinosaur>
    </div>
    </div>

    </div>
  `
})

export class AppComponent {

    masterDinosaurs: Dinosaur[] = [
      new Dinosaur('T-Rex', 'Bruno', 2, 'Carnivore', 'T-REX Exhibit', 'M', 'Eating People', 'Eating Garbage'),
      new Dinosaur('Brontosaurus', 'Billy', 14, 'Herbivore', 'Longneck Lane', 'M', 'Doing Homework', 'Bullies'),
      new Dinosaur('Velociraptor', 'Lenny', 16, 'Carnivore', 'Velociraptor Exhibit', 'M', 'C#', 'Having Fun'),
      new Dinosaur('Triceratops', 'Tracy', 42, 'Herbivore', 'Triceratops Exhibit', 'F', 'Taxes', 'Knitting Hats'),
    ];
  selectedDinosaur = null;
  totalCaretakersNeeded: number = this.totalCaretakers();

  appendNewItems(newDinosaur: Dinosaur){
    this.masterDinosaurs.push(newDinosaur);
  }

  editDinosaur(clickedDinosaur) {
   this.selectedDinosaur = clickedDinosaur;
}

  finishedEditing(result) {
  this.selectedDinosaur.species = result[0];
  this.selectedDinosaur.name = result[1];
  this.selectedDinosaur.age = result[2];
  this.selectedDinosaur.diet = result[3];
  this.selectedDinosaur.location = result[4];
  this.selectedDinosaur.sex = result[5];
  this.selectedDinosaur.likes = result[6];
  this.selectedDinosaur.dislikes = result[7];
  this.selectedDinosaur = null;
}

updateDinosaurCaretakers(currentItem){
  currentItem.caretakers -= 1;
}

totalCaretakers() {
    var totalcaretakers = 0;
    this.masterDinosaurs.forEach(function(Dinosaur) {
    (totalcaretakers += Dinosaur.caretakers);
      console.log(totalcaretakers);
    });
    return totalcaretakers;
  }

}
