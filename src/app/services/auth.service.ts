import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

// Firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as auth from 'firebase/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';

// rxjs
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<User> | null;

  isSignedIn?: boolean;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    // @ts-ignore
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  isUserSignedIn() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.router.navigate(['/app']);
      }
    });
  }

  async googleSignin() {
    try {
      const provider = new auth.GoogleAuthProvider();
      const credential = await this.afAuth.signInWithPopup(provider);
      return this.updateUserData(credential.user).then(() => {
        this.router.navigate(['/app']);
      });
    } catch (err) {
      alert(err);
    }
  }

  async signUpWithEmailAndPassword(email: string, password: string) {
    try {
      const credential = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      return this.updateUserData(credential.user).then(() => {
        this.router.navigate(['/app']);
      });
    } catch (err: any) {
      alert(err);
    }
  }

  async signInWithEmailAndPassword(email: string, password: string) {
    try {
      const credential = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      return this.updateUserData(credential.user).then(() => {
        this.router.navigate(['/app']);
      });
    } catch (err) {
      alert(err);
    }
  }

  async sendPasswordResetLink(email: string) {
    try {
      return this.afAuth.sendPasswordResetEmail(email);
    } catch (err) {
      alert(err);
    }
  }

  async signOut() {
    await this.afAuth.signOut();
    return this.router.navigate(['/']);
  }

  private updateUserData(user: any) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    };

    return userRef.set(data, { merge: true });
  }
}
