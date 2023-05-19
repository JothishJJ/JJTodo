import { Injectable } from '@angular/core';

import { Task } from './task.model';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Timestamp } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class TasklistService {
  private user: any;
  private collectionRef?: AngularFirestoreCollection<Task>;
  public todoitems?: any;

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.user = user;
        this.collectionRef = this.afs.collection(
          `todolist/${user.uid}/tasks`,
          (ref) => ref.orderBy('creationTime')
        );
        this.todoitems = this.collectionRef.valueChanges();
      }
    });
  }

  // @ts-ignore
  async addTask(title: string, description?: string) {
    try {
      return this.collectionRef?.add({
        creationTime: Timestamp.now(),
        title: title,
        description: description,
        completed: false,
      });
    } catch (err) {
      alert(err);
    }
  }
}
