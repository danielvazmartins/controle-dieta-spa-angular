import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

declare var google: any;

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild('googleSignInButton') googleSignInButton!: ElementRef;

  currentUserEmail: string | null = null;
  isLoading = false;
  errorMessage = '';
  private readonly clientId = '456386597094-m6dislqvgkljsfh6cq3cjtha7njvvarm.apps.googleusercontent.com';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Verificar se usuário já está autenticado
    if (this.authService.isAuthenticated()) {
      const user = this.authService.getCurrentUser();
      if (user) {
        this.currentUserEmail = user.email;
      }
    }

    // Configurar callback para resposta de credencial ANTES de inicializar Google
    (window as any).handleCredentialResponse = (response: any) => {
      this.handleGoogleSignIn(response);
    };

    // Inicializar Google GSI com o client_id
    if (google?.accounts?.id) {
      google.accounts.id.initialize({
        client_id: this.clientId,
        callback: (window as any).handleCredentialResponse
      });
    }

    this.authService.initialize(this.clientId);
  }

  ngAfterViewInit(): void {
    // Renderizar o botão de sign-in do Google somente após inicialização
    if (this.googleSignInButton && google?.accounts?.id) {
      google.accounts.id.renderButton(
        this.googleSignInButton.nativeElement,
        {
          type: 'standard',
          size: 'large',
          text: 'signin_with',
          logo_alignment: 'left'
        }
      );
    }
  }

  handleGoogleSignIn(response: any): void {
    this.isLoading = true;
    this.errorMessage = '';

    try {
      this.authService.handleCredentialResponse(response);
      const user = this.authService.getCurrentUser();
      
      if (user) {
        this.currentUserEmail = user.email;
        console.log('Usuário autenticado:', user.email);
        
        // Redirecionar para home após sucesso
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 500);
      }
    } catch (error) {
      this.errorMessage = 'Erro ao fazer login com Google. Tente novamente.';
      console.error('Erro no Google Sign-In:', error);
    } finally {
      this.isLoading = false;
    }
  }

  logout(): void {
    this.authService.logout();
    this.currentUserEmail = null;
  }
}
