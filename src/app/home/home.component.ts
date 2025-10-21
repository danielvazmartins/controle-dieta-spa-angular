import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./header/header.component";
import { DietService } from "../shared/services/diet.service";
import { MealComponent } from "./meal/meal.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    MealComponent
]
})
export class HomeComponent implements OnInit{

    constructor(private dietService: DietService) {}

    diet: any;

    ngOnInit(): void {
        this.diet = this.dietService.getDiet(1);
    }
}