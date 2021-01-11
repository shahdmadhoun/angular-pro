import { Component } from "@angular/core";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "my-app";
  studentName = "your name";
  studentAge = 0;
  students = [
    { name: "shahd", age: 20 },
    { name: "malak", age: 15 },
    { name: "ahmad", age: 25 }
  ];
  add() {
    this.students.push({
      name: this.studentName,
      age: this.studentAge
    });
  }
}
