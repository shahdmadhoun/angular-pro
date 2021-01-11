import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "my-app";
  students = [
    { name: "shahd", age: 20 },
    { name: "malak", age: 15 },
    { name: "ahmad", age: 25 }
  ];
}
