import { Component } from '@angular/core';
import { Dinosaur } from './dinosaur.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Epicodus Park</h1>
      <p>Total Needed Caretakers: {{totalCaretakersNeeded}}<p>
      <new-dinosaur [childNewDinosaur]="masterDinosaurs" (newSender)="appendNewItems($event)"></new-dinosaur>

      <dinosaur-list [childDinosaurList]="masterDinosaurs" (clickSender)="editDinosaur($event)" (eatSender)="updateDinosaurCaretakers($event)"></dinosaur-list>
      <edit-dinosaur [childSelectedDinosaur] = "selectedDinosaur" (doneButtonClickedSender)="finishedEditing($event)"></edit-dinosaur>

    </div>
  `
})

export class AppComponent {

    masterDinosaurs: Dinosaur[] = [
      new Dinosaur('T-Rex', 'Bruno', 2, 'Carnivore', 'trex land', 'm', 'killing', 'not killing'),
      new Dinosaur('Brontosaurus', 'Billy', 14, 'Herbivore', 'longneck island', 'm', 'pooping', 'stepping in poop'),
      new Dinosaur('Velociraptor', 'Seth', 16, 'Carnivore', 'dads basement', 'm', 'mains reaper in overwatch', 'following the rules'),
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
