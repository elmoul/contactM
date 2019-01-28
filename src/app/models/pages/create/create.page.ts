import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { FirestoreService } from '../../services/data/firestore.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  	public createContactForm: FormGroup;
	constructor(
	  public loadingCtrl: LoadingController,
	  public alertCtrl: AlertController,
	  public firestoreService: FirestoreService,
	  private router: Router,
	  formBuilder: FormBuilder
	) {
	  this.createContactForm = formBuilder.group({
	    nom: ['', Validators.required],
	    prenom: ['', Validators.required],
	    adresse: ['', Validators.required],
	    telephone: ['', Validators.required],
	    commentaire: ['', Validators.required],
	  });
	}

  	ngOnInit() {
  	}

  	async createContact() {
	  const loading = await this.loadingCtrl.create();

	  const nom = this.createContactForm.value.nom;
	  const prenom = this.createContactForm.value.prenom;
	  const telephone = this.createContactForm.value.telephone;
	  const adresse = this.createContactForm.value.adresse;
	  const commentaire = this.createContactForm.value.commentaire;

	  this.firestoreService
	    .createContact(nom, prenom, adresse, telephone, commentaire)
	    .then(
	      () => {
	        loading.dismiss().then(() => {
	          this.router.navigateByUrl('');
	        });
	      },
	      error => {
	        console.error(error);
	      }
	    );

	  return await loading.present();
	}

}
