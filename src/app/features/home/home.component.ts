import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";

import { HeaderComponent } from "./header/header.component";
import { DietService } from "@shared/services/diet.service";
import { MealComponent } from "./meal/meal.component";
import { TotalComponent } from "./total/total.component";
import { User } from "@shared/models/user.model";
import { AuthService } from "@shared/services/auth.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    MealComponent,
    TotalComponent
]
})
export class HomeComponent implements OnInit {

    constructor(
        private dietService: DietService,
        private authService: AuthService,
        private router: Router
    ) {}

    diet: any;
    currentUser: User | null = null;

    ngOnInit(): void {
        // Verifica se o usuário está autenticado
        if (!this.authService.isAuthenticated()) {
            this.router.navigate(['/login']);
            return;
        }

        this.currentUser = this.authService.getCurrentUser();
        console.log('NutriFlow - Usuário logado:', this.currentUser?.email);
        this.diet = this.dietService.getDietByUser(this.currentUser?.email || '');
    }
}