import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ViewDidEnter, ViewDidLeave } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';
import { AutofillDirective } from '../autofill.directive';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonList,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-navigate-page',
  templateUrl: './navigate-page.page.html',
  styleUrls: ['./navigate-page.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, AutofillDirective, IonItem, IonList, IonText, IonContent, IonHeader, IonToolbar, IonTitle, IonInput, IonButton]
})
export class NavigatePagePage implements ViewDidEnter, ViewDidLeave {

  public data?: {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
  };
  private subscription?: Subscription;
  constructor(private httpClient: HttpClient) {
  }

  ionViewDidLeave(): void {
    this.subscription?.unsubscribe();
  }

  ionViewDidEnter() {
    this.subscription = this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((data: any) => {
      this.data = data;
    });
  }

  logData($event: any) {
    console.log($event);
  }
}
