import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  car1 = new Car("Mazda",12);
  result = car1.getName();
}

class Car{
  private name: string;
  private year: number;

  public constructor(name : string, year: number) {
    this.name = name;
    this.year = year;
  }

  public getName(): string{
    return this.name + "has a year" + this.year
  }

}
const car1 = new Car("Mazda",12);
var result = car1.getName();