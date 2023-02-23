import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  username: any;
  password: any;

  nusername: any;
  npassword: any;
  ncpassword: any;
  nemail: any;
  
  constructor(private authservice : AuthService) { }

  ngOnInit(): void {
    const signUpButton = document.getElementById('signUp') as HTMLButtonElement;
    const signInButton = document.getElementById('signIn') as HTMLButtonElement;
    const container = document.getElementById('container') as HTMLElement;
    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });
    
    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });
  }

  signin(username : string, password : string) {
    this.authservice.login(username,password);
  }

  signup(username : string, email:string, password1 : string, password2 : string) {
    if(password1 == password2) {
      this.authservice.signUp(username, email,password1);
    } else {
      Swal.fire('Erreur mot de passe', 'Les mots de passe ne correspondent pas !', 'error')
    }
    
  }

}
