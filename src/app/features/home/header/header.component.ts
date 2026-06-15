import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "@shared/services/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss"
})
export class HeaderComponent implements OnInit {
  isMenuOpen: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.isMenuOpen = false;
  }

  clickMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.changeDetector.detectChanges();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}