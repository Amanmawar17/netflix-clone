import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent { 
  constructor(public router: Router, private auth: AngularFireAuth) {
    this.auth,
    this.router
  }
  async byGoogle() {
    const res = await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      this.router.navigateByUrl('/broswer').catch((error) => {
        console.log(error);
      });
  }
  logout() {
    this.auth.signOut();
  }
}
