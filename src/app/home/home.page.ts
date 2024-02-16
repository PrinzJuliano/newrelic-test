import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar, LoadingController,
  ToastController
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { cloudDownloadOutline, eye } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, RouterLink, IonIcon],
})
export class HomePage {

  @ViewChild('dataDiv') dataDiv?: ElementRef<HTMLDivElement>;
  constructor(private toastController: ToastController, private loadingController: LoadingController) {
    addIcons({eye, cloudDownloadOutline}); // you are missing addIcons Import
  }

  async fetchData() {
    if(this.dataDiv?.nativeElement) {
      this.dataDiv.nativeElement.innerHTML = 'Loading ...';
    }
    const loading = await this.loadingController.create();
    await loading.present();
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(r => r.json()).catch(async e => {
      console.error(e)
      const toast = await this.toastController.create({
        color: 'danger',
        header: 'An error occurred',
        message: 'Error: ' + e,
        duration: 5000,
      });
      await toast.present();
    });

    if(this.dataDiv?.nativeElement && data) {
      this.dataDiv.nativeElement.innerHTML = JSON.stringify(data, null, 2);
    }
    await loading.dismiss();
  }
}
