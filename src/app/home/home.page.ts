import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.interface';
import { FirestoreService } from '../models/services/data/firestore.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	public contactList;
	constructor(
	  private firestoreProvider: FirestoreService,
	  private router: Router
	) {}
	ngOnInit() {
	  this.contactList = this.firestoreProvider.getContactList().valueChanges();
	}
}
