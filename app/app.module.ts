import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { DinosaurListComponent }  from './dinosaur-list.component';
import { NewDinosaurComponent }  from './new-dinosaur.component';
import { EditDinosaurComponent } from './edit-dinosaur.component';
import { PricePipe } from './price.pipe';
@NgModule({
  imports: [ BrowserModule,
                  FormsModule ],
  declarations: [ AppComponent, DinosaurListComponent, NewDinosaurComponent, EditDinosaurComponent, PricePipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
