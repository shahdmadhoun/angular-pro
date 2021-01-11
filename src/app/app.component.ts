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
  studentDate = new Date(1, 1, 2000);
  students = [
    { name: "shahd", age: 20, date: new Date(4, 14, 2000) },
    { name: "malak", age: 15, date: new Date(1, 1, 1996) },
    { name: "ahmad", age: 25, date: new Date(30, 12, 1990) }
  ];
  add() {
    this.students.push({
      name: this.studentName,
      age: this.studentAge,
      date: this.studentDate
    });
  }
}
