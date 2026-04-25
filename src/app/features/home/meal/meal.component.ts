import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-meal",
  templateUrl: "./meal.component.html",
  styleUrl: "./meal.component.scss",
  imports: [
    CommonModule
  ],
})
export class MealComponent { 
  @Input() meal: any;
}