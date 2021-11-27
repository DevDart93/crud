import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ModalController } from '@ionic/angular';
import { AddRegisterPage } from '../add-register/add-register.page';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  allData: any;
  today : number = Date.now()

  constructor( public dataService: ApiService, public modalCtrl: ModalController) { }

  getData() {
    this.dataService.getPosts()
    .subscribe(
      (data) => {this.allData = data;},
      (error)=> {console.log(error);
      });

  }
  
  ngOnInit() {
    this.getData();
  }

  async addTask() {
    const modal = await this.modalCtrl.create({
      component: AddRegisterPage
    })
    return await modal.present();
  }
  







}
