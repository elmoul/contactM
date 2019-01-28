import { Injectable } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection } from 'angularfire2/firestore';
import { Contact } from '../../contact.interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public firestore: AngularFirestore) {}
  createContact(
	  nom: string,
	  prenom: string,
	  adresse: string,
	  telephone: string,
	  commentaire: string
	): Promise<void> {
	  const id = this.firestore.createId();

	  return this.firestore.doc('contactList/${id}').set({
	    id,
	    nom,
	    prenom,
	    adresse,
	    telephone,
	    commentaire,
	  });
	}
	getContactList(): AngularFirestoreCollection<Contact> {
	  return this.firestore.collection('contactList');
	}
	

}
