import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

// Firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, GithubAuthProvider, sendEmailVerification, getAuth } from 'firebase/auth';
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
  auth = getAuth();

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
          const userRef = this.afs.doc<User>(`users/${user.uid}`);
          return userRef.valueChanges();
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

  isVerified() {
    this.afAuth.authState.subscribe((user) => {
      if (user && !user.emailVerified) {
        this.router.navigate(['/verify-email']);
      }
    })
  }
  
  verified() {
    this.afAuth.authState.subscribe((user) => {
      if(user && user.emailVerified) {
        this.router.navigate(['/app'])
      }
    })
  }
  
  async verifyEmail() {
    try {
    if(this.auth.currentUser) {
      sendEmailVerification(this.auth.currentUser).then(() => {
        alert("Email sent! also check spam")
        alert("Refresh the page after verification")
      });
    }
    } catch(err) {
      alert(err);
    }
  }

  async googleSignin() {
    try {
      const provider = new GoogleAuthProvider();
      const credential = await this.afAuth.signInWithPopup(provider);
      return this.updateUserData(credential.user).then(() => {
        this.router.navigate(['/app']);
      });
    } catch (err) {
      alert(err);
    }
  }

  async githubSignin() {
    try {
      const provider = new GithubAuthProvider();
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

  async completeSignOut() {
    try {
    // @ts-ignore 
    this.afAuth.authState.subscribe(user => {
      if(user) {
        return user.delete().then(() => {
          this.router.navigate(['/signup'])
        })
      }
    })
    } catch(err) {
      alert(err);
    }
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
