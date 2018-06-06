import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  pickRandomPerson() {

  }

  getName() {
    return `Nmae: ${this.person.name}`;
  }

  switchPerson() {
    if(this.pickRandomPerson.gender === 'f') {
      this.person = this.male;
    } else if (this.pickRandomPerson.gender === 'm') {
      this.person = this.female;
    }
  }
}
